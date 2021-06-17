const express = require('express');
const cors = require('cors');
const authUser = require('./server/authenticate');
const getMedicine = require("./server/medicine");
const mongoose = require('mongoose');
const {User} = require('./server/schema');
const md5 = require('md5');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/medtracker",{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log("->ERROR: MONGODB CONNECTION FAILED!\n"+err);
    }
    else{
        console.log("->SUCCESS: MONGODB CONNECTED SUCCESSFULLY");
    }
});


app.get("/medicine",getMedicine,(req,res)=>{
    console.log(req.query);
});

app.post("/login",authUser,(req,res)=>{
    
});

app.post("/signup",(req,res)=>{
    const data = req.query;
    console.log(data);
    User.find({email:data.username},function(err,result){
        console.log(result.length)
        if(result.length==1)
            {
                console.log("Already exits");
                res.send("User Already Exists");
            }
        else{
            const password = md5(data.password);
            console.log(password);
            User.insertMany({firstName:data.firstname,lastName:data.lastname,userName:data.username,passWord:password},function(err){
                if(err){
                    console.log("Error in inserting New User");
                    res.send("Error in addin user");
                }
                else{
                    res.send("User Added");
                }
            })
        }
    })
    
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);