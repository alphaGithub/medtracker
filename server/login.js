const express = require('express');
const md5 = require('md5');
const {check} = require('express-validator');
const {User} = require('./schema');
const router = express.Router();

router.use(express.urlencoded({extended:true}));


router.post("/",[check('userName').isEmail()],(req,res)=>{
    const userName=req.body.username;
    const passWord=req.body.password;
    if(req.session.username){
        res.send({"errors":[{msg:"Already Login!"}],});
    }
    else if(!userName || !passWord){
        res.send({"errors":[{msg:"Login failed!",description:"Username or Password or Both unavailable"}]});
    }
    else{
        User.findOne({userName:userName},(err,result) =>{
            if(!result){
                res.send({"errors":[{msg:"username Invalid!"}],});
            }
            else{
                if(result.passWord==md5(passWord)){
                    req.session.username = userName;
                    req.session.userid = result._id;
                    res.send({"errors":null,"message":"Welcome to Medtracker!"});
                }
                else{
                    res.send({"errors":[{msg:"Password do Not match!",description:"Password Incorrect!"}],});
                }
            }
        });
    }
});

router.get("/islogged",(req,res)=>{
    if(req.session.username){
        res.send({"errors":null,"message":"You are LoggIn!",login:true});
    }
    else{
        res.send({"errors":[{msg:"Not Logged In!",description:"Session doesn't Exists!"}],login:false});
    }
})

module.exports = router;