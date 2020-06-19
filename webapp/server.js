const express = require('express');
const app = express();
const port = 80;
const path = require('path');

const {createProxyMiddleware} = require('http-proxy-middleware');


app.use('/duomodi',createProxyMiddleware({target:'http://localhost:6000/',changeOrigin:true}));
app.use('/api',createProxyMiddleware({target:'https://torre.co/',changeOrigin:true}));
app.use('/opportunities',createProxyMiddleware({target:'https://search.torre.co/',changeOrigin:true}));

app.use(express.static(path.join(__dirname,'build')));

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });

app.listen(port,()=>{
    console.log('App Started');
});