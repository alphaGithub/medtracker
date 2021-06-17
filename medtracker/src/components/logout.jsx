import React from "react";
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import Nav from "./Nav";
function Logout(){
    return (
            <div><Nav/>
            <h1>Logged Out!</h1>
            </div>
    );
}

export default Logout;