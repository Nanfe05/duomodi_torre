// ENV VARIABLES
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {check,validationResult} = require('express-validator');


// Route POST / SIGNIN
// Register User
// Public

router.post('/',async(req,res)=>{
    console.log('dlkjds');
});