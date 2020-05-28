// ENV VARIABLES
require('dotenv').config();

// Json Web Token
const jwt = require('jsonwebtoken');


module.exports = function(req,res,next){
    // Get Token from the header
    const token = req.header(`x-duomodi-token`);
    if(!token){
        return res.status(401).json({msg:'Forbidden Access'});
    }
    try{
        // Verify Token
        const secretKey = process.env.SECRET_KEY;
        const decode = jwt.verify(token,secretKey);
        req.user = decode.user;
        next();
    }catch(err){
        res.status(401).json({msg: 'Session Expired'});
    }
}