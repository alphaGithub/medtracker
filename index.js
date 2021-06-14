const express = require('express');
const cors = require('cors');
const authUser = require('./server/authenticate');
const getMedicine = require("./server/medicine");
const mongoose = require('mongoose');
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
    console.log(req);
});

app.post("/login",authUser,(req,res)=>{
    
});

app.post("/signup",(req,res)=>{
    console.log("Hello World!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);