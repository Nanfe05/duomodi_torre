// ENV VARIABLES
require('dotenv').config();
// MONGO DB
const mongoose = require('mongoose');


const dbConnection = async () =>{
    //mongoose.set('useFindAndModify', false);
    //const uri="mongodb+srv://yopyop122:yopyop122@moogosetrial-9uyow.mongodb.net/test?retryWrites=true&w=majority";
    const uri=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-uzrci.gcp.mongodb.net/test?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(uri,{useNewUrlParser:true
            ,useUnifiedTopology: true
        });
        console.log('MongoDB Atlas: Database Connected');
    }catch(err){
        console.log('DB Connection Error: ', err);
        process.exit(1)
    }
};

module.exports = dbConnection;