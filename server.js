// ENV VARIABLES
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port || 5000;

// DB 
const  dbConnection  = require('./mongodb');
// Connect to DB
dbConnection();

// Routes 
// Sign In
app.use(`/duomondi/api/login`,require('./routes/login'));
// Log In
app.use(`/duomondi/api/sigin`,require('./routes/sigin'))

app.get('*',(req,res)=>{
    res.status(404).send('Page NOT Found');
})

app.listen(port,()=>console.log('Server Started at port: ', port));