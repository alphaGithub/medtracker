import React, {useContext } from "react";
import AuthApi from "../script/authApi";
import { logoutRequest } from "../script/auth";
import Nav from "./Nav";

function Logout(){
    const authApi = useContext(AuthApi);
    const handleLogout = async()=>{
        const res= await logoutRequest();
        if(res.data.errors==null){
            authApi.setAuth(false);
            console.log(res.data.message);
        }
        else{
            console.log(res.data.errors[0].msg);
        }
    }
    return (
            <div>
                <Nav/>
                {console.log(authApi.auth)}
                <h1>{authApi.auth?"Logged Out!":"Your are not Logged In"}</h1>
                {authApi.auth?handleLogout():null}
            </div>
    );
}

export default Logout;