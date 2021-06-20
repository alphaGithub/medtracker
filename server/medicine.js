const express = require('express');
const {check} = require('express-validator');
const {Medicine} = require('./schema');
const router = express.Router();
router.use(express.urlencoded({extended:true}));


router.get("/",(req,res)=>{
    const medNameRequest=req.query.medname;
    if(!medNameRequest){
        res.send({"errors":[{msg:"Please provide medicine name",description:"user have not given medicine name"}]});
    }
    else{
        Medicine.find({medName:{$regex:"^"+medNameRequest,$options:"i"}},function(err,result){
            if(err){
                res.send({"errors":[{msg:"Error while searching for medicine",description:"Database query problem!"}],});
                console.log("------->Error  : Medicine Query Request have Error, database problem")
            }
            else{
                if(result.length==0)
                    {
                        res.send({"errors":[{msg:"Not available",description:"Database do not contain medicine of that name!"}],});
                    }
                else{
                    res.send({"errors":null,"result":result});
                    }
                
            }
        });
    }
});

module.exports = router;