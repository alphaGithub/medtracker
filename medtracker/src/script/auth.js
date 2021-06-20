import axios from "axios";
import headers from "./header_allow"
require('dotenv').config()



const signInRequest = async(userLoginFormDetail) =>{
    const result =await axios.post("/login/",userLoginFormDetail,{headers})
    return result;
};

const signUpRequest = async(userSignupFormDetail)=>{
     const result = await axios.post("/signup/",userSignupFormDetail,{headers});
     return result;
}

const logoutRequest = async()=>{
    const result =  await axios.get("/logout",{},{headers});
    console.log(result.data)
    return result;
}

const hasSigned = async()=>{
    const result = await axios.get('/login/islogged');
    return result;
}

export {signInRequest,signUpRequest,logoutRequest,hasSigned};