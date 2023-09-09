const mongoose = require('mongoose')

const user = mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    age:{
        type:Number,
        // required:true
    },
    email:{
        type:String,
        
    }
});

const users = mongoose.model('userschema',user);

module.exports=(users);