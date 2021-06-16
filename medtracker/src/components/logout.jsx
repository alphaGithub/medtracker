import React from "react";
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
function Logout(){
    return (
            <Redirect from="/logout" to="/"></Redirect>
    );
}

export default Logout;