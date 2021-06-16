import React,{useState} from 'react';
import axios from 'axios';
function SignupForm(){

    const [user,setUser] =useState({
        userName:"",
        passWord:"",
        firstName:"",
        lastName:"",
    });
    


    function signupFormSubmitted(event){
       /* event.preventDefault();
        const firstname = event.target.f
        const username = event.target.username.value;
        const password = event.target.password.value;
        

        axios
          .post("http://localhost:5000/login?username="+username+"&password="+password)
          .then(res => {
                if(res.status==200){
                    if(res.data.LOGIN=="TRUE"){
                        console.log(res.data);
                        setStatus(true);
                    }
                    else{
                        console.log("Failed");
                        setStatus(false);
                    }
                }
                else{
                    console.log("failed");
                    setStatus(false);
                }
          })
          .catch(err => console.error(err));*/
    }

    return (<div style={{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"150px",height:"100%"}}>
        <form onSubmit={signupFormSubmitted}>
        <div className="mb-3">
            <label className="form-label">First Name</label>
             <input type="email" className="form-control" id="firstname"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Last Name</label>
             <input type="email" className="form-control" id="lastname"></input>
            </div>
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

export default SignupForm;