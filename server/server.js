const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user.js');
const cors = require('cors');
const multer = require('multer');


const corsoption = {
    origin:'http://localhost:3000'
}
app.use(cors(corsoption))
// mongoose.connect('mongodb+srv://root:root@cluster0.cvvq99e.mongodb.net/?retryWrites=true&w=majority',function(error){
mongoose.connect('mongodb://0.0.0.0:27017/CRUD',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Connected");
    }
});
mongoose.Promise = global.Promise;

app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())


const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
});

const uploads = multer({storage:Storage});

//apis
app.get('/users',function(req,res){
    User.find({})
    .then(function(user){
        res.send(user)
        // res.json(user)
    })
    .catch(err=>console.log(err))
})

app.post('/login',function(req,res){
    User.findOne({username:req.body.name,userage:req.body.age})
    .then(function(user){
       
        res.send(user);
    })
    .catch(err=>res.send(err))
})

// app.post('/createusers',function(req,res){
app.post('/createusers',uploads.single('image'),async function(req,res){
    
    // const imgUpload = new User ({
    //     fileName:req.file.originalname,
    //     path:req.file.path
    // })
    console.log(req.body,req.file);
    // console.log(req.body);
    
   await User.create(
        {
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        password:req.body.date,
        fileName:req.file,
        path:req.file
    },
    // req.body,req.file
    )
        // req.body,imgUpload
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
