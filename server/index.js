require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authUser = require('./authenticate');
const getMedicine = require("./medicine");
const mongoose = require('mongoose');
const {User} = require('./schema');
const md5 = require('md5');
const session = require('express-session');
const login = require('./login');
const logout = require("./logout");
const signup = require("./signup");
const meds = require("./medicine");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin',process.env.FRONTEND_ADDRESS);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors());
app.use(session(
    {secret:'zkxasej123eodsjkadshfasfsd',
    resave:true,
    saveUninitialized:true,
    cookie:{httpOnly:true,maxAge:3600000,}}));



/*
mongoose.connect("mongodb+srv://admin-amit:"+process.env.MONGO_PASSWORD+"@cluster0.krpbc.mongodb.net/medtracker?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log("->ERROR: MONGODB CONNECTION FAILED!\n"+err);
    }
    else{
        console.log("->SUCCESS: MONGODB CONNECTED SUCCESSFULLY");
    }
});
*/


mongoose.connect("mongodb://localhost:27017/medtracker",{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log("------->ERROR: MONGODB CONNECTION FAILED!\n"+err);
    }
    else{
        console.log("------->SUCCESS: MONGODB CONNECTED SUCCESSFULLY");
    }
});


app.get("/",(req,res)=>{res.send({"message":"Hello from Server!"});});
app.use("/meds",meds);
app.use('/login',login);
app.use("/logout",logout);
app.use("/signup",signup);


const port = process.env.PORT || 7000;
app.listen(port,function(err){
    if(err){
        console.log("------->Error  : Server unable to start");
    }
    else{
        console.log("------->Log    : Express Server Running at => "+port);
    }
});