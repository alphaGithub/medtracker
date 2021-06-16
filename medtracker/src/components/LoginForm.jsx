import axios from "axios";
import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect,userLocation, useLocation } from "react-router-dom";
//import { Redirect } from "react-router-dom";
//import { Redirect } from "react-router";
import UserPage from "./User";
import Nav from "./Nav"

//http://localhost:5000/login?username="+userName+"&password="+password

function LoginForm(){
    const [formDetail,setValue] = useState({username :"",password:"",loginstatus:false,data:null});
    const location = useLocation();
    function handleChange(event){
        const {name,value} = event.target;
        setValue(prevValue =>{
            return {...prevValue,
            [name]:value
        };
        });
    }

    function loginFormSubmitted(event){
        event.preventDefault();
        const userName = formDetail.username;
        const passWord = formDetail.password;

        axios
          .post("http://localhost:5000/login?username="+userName+"&password="+passWord)
          .then(res => {
                if(res.status===200){
                    if(res.data.LOGIN==="TRUE"){
                        
                        const responseData = res.data;
                        setValue(prevValue=>{
                            return {...prevValue,
                                    loginstatus:true,
                                    data:responseData.result
                            };
                        });
                    }
                    else{
                        setValue(prevValue=>{
                            return {...prevValue,
                                    loginstatus:false,
                                    data:null
                            };
                        });
                    }
                }
                else{
                    setValue(prevValue=>{
                        return {...prevValue,
                                loginstatus:false,
                                data:null
                        };
                    });
                }
          })
          .catch(err => console.error(err));
    }

    
    return !formDetail.loginstatus?<div><Nav/><div style={{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"150px",height:"100%"}}>
        <form onSubmit={loginFormSubmitted}>
            <div className="mb-3">
            <label className="form-label">Email address</label>
             <input onChange={handleChange} type="email" className="form-control" name="username"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Password</label>
            <input  onChange={handleChange} type="password" className="form-control" name="password"></input>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div></div>:<Route to="/user"><UserPage loginStatus={formDetail.loginstatus} userData = {formDetail.data}/></Route>;
}

export default LoginForm;