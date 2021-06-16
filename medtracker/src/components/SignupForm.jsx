import React,{useState} from 'react';
import axios from 'axios';
import Nav from './Nav';

function SignupForm(){

    const [signupForm,setForm] =useState({
        userName:"",
        passWord:"",
        firstName:"",
        lastName:"",
    });
    
    function handleChange(event){
        const {name,value} = event.target;
        setForm(prevValue=>{
            return {...prevValue,
            [name]:value}
        });
    }


    function signupFormSubmitted(event){
        
        axios
          .post("http://localhost:5000/login",{
              username:SignupForm.userName,
              passWord:SignupForm.passWord,
              firstname:SignupForm.firtName,
              lastname:SignupForm.lastName
          })
          .then(res => {
                if(res.status==200){
                    if(res.data.LOGIN=="TRUE"){
                        console.log(res.data);
                    }
                    else{
                        console.log("Failed");
                    }
                }
                else{
                    console.log("failed");
                }
          })
          .catch(err => console.error(err));
    }

    return (
        <div><Nav/>
    <div style={{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"150px",height:"100%"}}>
        <form onSubmit={signupFormSubmitted}>
        <div className="mb-3">
            <label className="form-label">First Name</label>
             <input onChange={handleChange} type="text" className="form-control" name="firstname"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Last Name</label>
             <input onChange={handleChange} type="text" className="form-control" name="lastname"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Email address</label>
             <input onChange={handleChange} type="email" className="form-control" name="username"></input>
            </div>
            <div class="mb-3">
            <label className="form-label">Password</label>
            <input onChange={handleChange} type="password" class="form-control" name="password"></input>
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
    </div>
    );
}

export default SignupForm;