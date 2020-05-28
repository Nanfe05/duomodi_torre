// ENV VARIABLES
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {check,validationResult} = require('express-validator');

// Schema Needed
const User = require('../schemas/user');

// Route POST / LOGIN
// LOGIN User
// Public

router.post('/',[
    check('email', 'Please enter a valid email').isEmail(),
    check('pass', 'Please enter a valid password').exists()
],async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(206).json({ errors: errors.array() });
    }
    const { email, pass } = req.body;

    try {
      let user = await User.findOne({ email});

      if (!user) {
        return res.status(206).json({ msg: 'Email or password error' });
      }
      // look for current password
      const currentPassword = user.pass;
       // check if password match
       const passmatch = await bcrypt.compare(pass, currentPassword);

       if (!passmatch) {
        return res.status(206).json({ msg: 'Email or password error' });
      }

      const payload = {
        user: {
          id: user.id
        }
      };
      // Key for JWT and time
      const secretkey = process.env.SECRET_KEY;
      const sessionTime = process.env.SESSION_TIME;
      //const token = jwt.sign(payload, secretkey, { expiresIn: 7200 });
       jwt.sign(
        payload,
        secretkey,
        { expiresIn: sessionTime },
        (err, token) => {
          if (err) throw err;

          res.json({ token });
        }
      );

      // Generate JWT
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

    //res.send('User sending info to log');
  }


);

module.exports = router;