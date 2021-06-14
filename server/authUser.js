const mongoose = require('mongoose');
const {userSchema} = require('./schema')
mongoose.connect('mongodb://localhost:27017/medtracker', {useNewUrlParser: true, useUnifiedTopology: true});
function authUser(req,res){
    const userName = req.query.username;
    const password = req.query.password;
    User.findOne({email:userName},function(err,userList){
        if(userList.length==0){
            console.log("not allowed");
            res.send("Login failed !");
        }
        else if(userName==userList[0].email)
        {
        console.log(userName+ "Logged in");
        }
    });
};

module.exports = authUser; 