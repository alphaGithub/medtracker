const {User} = require('./schema');

function authUser(req,res,next){
    const userName = req.query.username;
    const passWord = req.query.password;
    User.findOne({email:userName},(err,result) =>{
        let n = 0;
        if(!result){
            res.status(404).json({"LOGIN":"FALSE"});
        }
        else{
            if(result.password==passWord){
                res.status(200).json({"LOGIN":"TRUE","result":result});
            }
            else{
                res.status(404).json({"LOGIN":"FALSE"});

            }
        }
        res.send();
    });
    next();
}

module.exports = authUser;