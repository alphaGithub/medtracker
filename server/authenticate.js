const {User} = require('./schema');
const md5 = require('md5');
function authUser(req,res,next){
    const userName = req.query.username;
    const passWord = md5(req.query.password);
    User.findOne({userName:userName},(err,result) =>{
        let n = 0;
        console.log(result);
        if(!result){
            res.status(200).json({"LOGIN":"FALSE"});
        }
        else{
            if(result.passWord==passWord){
                console.log(passWord);
                res.status(200).json({"LOGIN":"TRUE","result":result});
            }
            else{
                res.status(200).json({"LOGIN":"FALSE"});

            }
        }
        res.send();
    });
    next();
}

module.exports = authUser;