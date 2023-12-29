const mongoose = require('mongoose')

const user = mongoose.Schema({
    name:String,
    age:Number,        
    email:String,
    // fileName:String,
    path:String
});

const users = mongoose.model('userschema',user);

module.exports=(users);