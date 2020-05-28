// ENV VARIABLES
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {check,validationResult} = require('express-validator');

// Schema Needed
const User = require('../schemas/user');

// Route POST / SIGNIN
// Register User
// Public

router.post('/',[
    check('email', 'Email is Required').isEmail(),
    check('pass', 'Password is Required')
      .not()
      .isEmpty(),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(206).json({ msg: errors.array() });
    }

    //destructuring json received
    const { email, pass } = req.body;

    // Search if email already exists
    try {
        let user = await User.findOne({email});
        if (user) {
          return res.status(206).json({ msg: 'User Already exists' });
        }
        user = new User({
            email,
        });
        const salt = await bcrypt.genSalt(10);
        user.pass = await bcrypt.hash(pass, salt);
        
        await user.save();

        // JSON WEB TOKEN
        const payload = { user: { id: user.id } };
        // Key for JWT and time
        const secretkey = process.env.SECRET_KEY;
        const sessionTime = process.env.SESSION_TIME;

        jwt.sign(
            payload,
            secretkey,
            { expiresIn: sessionTime }, // algorithm: 'HS256'
            (err, token) => {
              if (err) {
                console.error(`Error creating the token: ${err}`);
                throw err;
              }
              //console.log(token);
              res.json({ token });
            }
          );
        } catch (error) {
          console.error(error.message);
          res.status(500).send('Server Error');
        }
    
});

module.exports = router;