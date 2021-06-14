const mongoose = require('mongoose');
const userSchema = {
    firstName:String,
    lastName:String,
    email:String,
    password:String,
}
const medSchema ={
    medName:String,
    medPrice:Number
}
const Medicine = mongoose.model("med",medSchema);
const User = mongoose.model("user",userSchema);
module.exports = {User,Medicine};
