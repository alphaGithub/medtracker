const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended:true}));


router.get("/",(req,res)=>{
    if(!req.session.username){
        res.send({"error":[{msg:"Sorry! ,You are Not logged in!"}],});
    }
    else{
        req.session.destroy(function(err){
            if(err){
            console.log("------->Error  : Logout session unable to destroy!");
            console.log("       >       : File Name logout.js");
            res.send({"error":[{msg:"Problem with logout session",description:"Logout,session unable to destroy"}],});
            }
            else{
                res.send({"error":null,"message":"Logout Success!"});
            }
        });
        
    }
    
});

module.exports = router;