const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user.js');
const cors = require('cors')


const corsoption = {
    origin:'http://localhost:3000'
}
app.use(cors(corsoption))
mongoose.connect('mongodb+srv://root:root@cluster0.cvvq99e.mongodb.net/?retryWrites=true&w=majority',function(error){
// mongoose.connect('mongodb://localhost:27017/CRUD',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("COnnected");
    }
});
mongoose.Promise = global.Promise;

app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())


app.get('/users',function(req,res){
    User.find({}).then(function(user){
        res.send(user)
    })
    .catch(err=>console.log(err))
})

app.post('/createusers',function(req,res){
    console.log(req.body);
    
    User.create({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email
    })
    .then(function(user){
        res.send(user);
    })
    .catch(err=>console.log(err))
})

app.get('/users/:id',function(req,res){
    User.findById(req.params.id)
    .then(function(user){
        res.send(user);
    })
    .catch(err=>console.log(err))
})
app.put('/editusers/:id',function(req,res){
    User.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        age:req.body.age,
        email:req.body.email
    })
    .then(function(user){
        res.send(user);
    })
    .catch(err=>console.log(err))
})

app.delete('/delusers/:id',function(req,res){
    User.findByIdAndDelete(req.params.id)
    .then(function(){
        res.send("profile deleted");
    })
    .catch(err=>console.log(err))
})
app.listen(5050,()=>console.log('server running on 5050'))
