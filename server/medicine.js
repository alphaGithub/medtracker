const {Medicine} = require('./schema');

function getMedicine(req,res,next){
    const medNameRequest = req.query.medname;
    Medicine.find({medName:{$regex:"^"+medNameRequest}},function(err,result){
        if(err){
            res.send("ERROR while query");
        }
        else{
            res.send(result);
        }
        
    });
    console.log("query for medicine");
    next();
}

module.exports = getMedicine;