// ENV VARIABLES
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port || 6000;

// DB 
const  dbConnection  = require('./mongodb');
// Connect to DB
dbConnection();

// Init Middleware - to parse incoming json data
app.use(express.json({}));

// Routes 
// Sign In
app.use(`/duomodi/login`,require('./routes/login'));
// Log In
app.use(`/duomodi/signin`,require('./routes/signin'))

app.get('*',(req,res)=>{
    console.log(req.headers);
    res.status(404).send('Page NOT Found');
    
})

app.listen(port,()=>console.log('Server Started at port: ', port));