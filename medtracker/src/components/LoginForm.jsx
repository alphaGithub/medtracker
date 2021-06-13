import React from 'react';
import axios from "axios";
import { response } from 'express';
function loginFormSubmitted(event){
    console.log(event.target.email);
    event.preventDefault();
    axios.get("http://localhost:5000/login",{
        username:event.target.email,password:event.target.password}).then(function(respose){
        console.log(response);
    })
}

function LoginForm(){
    return (<div>
        <form >
            <div className="mb-3">
            <label className="form-label">Email address</label>
             <input type="email" className="form-control" id="username"></input>
            </div>
            <div class="mb-3">
            <label className="form-label">Password</label>
            <input type="password" class="form-control" id="password"></input>
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>);
}

export default LoginForm;