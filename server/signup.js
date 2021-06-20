const express = require('express');
const md5 = require('md5');
const {check} = require('express-validator');
const {User} = require('./schema');
const router = express.Router();
router.use(express.urlencoded({extended:true}));


router.post("/",[check('userName').isEmail()],(req,res)=>{
    const firstName=req.body.firstname;
    const lastName=req.body.lastname;
    const userName=req.body.username;
    const passWord=req.body.password;

    if(req.session.username){
        res.send({"errors":[{msg:"Please Logout!"}],});
    }
    else if(!userName || !passWord || !firstName || !lastName){
        res.send({"errors":[{msg:"Signup failed!",description:"Username/Password/first Name/last Name, either of them is not availale"}]});
    }
    else{
        User.find({userName:userName},function(err,result){
            if(result.length>=1)
                {
                    console.log("------->Error  : User Already Exists ->"+userName);
                    res.send({"errors":[{msg:"Accout Already Exists!",description:"same username tried to signup!"}],});
                }
            else{
                
                User.insertMany({"firstName":firstName,"lastName":lastName,"userName":userName,"passWord":md5(passWord)},function(err){
                    if(err){
                        console.log("------->Error  : Couldn't add user to database");
                        console.log("       >File   : signup.js");
                        res.send({"errors":[{msg:"Sorry, Couldn't add user accout",description:"Database Problem!"}],});
                    }
                    else{
                        //setting 
                        req.session.username = userName;
                        User.findOne({userName:userName},(err,result) =>{
                            if(err){
                                console.log("------->Error  : Error while finding key of user while signup" );
                                console.log("       >File   : signup.js");
                                req.session.destroy(function(err){
                                    console.log("------->Error  : Logout while signup error for database not able to find id, session unable to destroy!");
                                    console.log("       >       : File Name logout.js");
                                });
                                res.send({"errors":[{msg:"Your Accout Has been created,but your have been logged out!",description:"Database Problem!"}]});
                            }
                            else{
                                res.send({"errors":null,"message":"Signup Success!"});
                            }
                            req.session.userid = result._id;
                            
                        });
                    }
                })
            }
        });


        
    }
});

module.exports = router;