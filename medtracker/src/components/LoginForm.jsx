import axios from "axios";
import React,{useState} from 'react';



//http://localhost:5000/login?username="+userName+"&password="+password

function LoginForm(){
    const [userName,setUserName] = useState("");
    const [passWord,setPassword] = useState("");



    function loginFormSubmitted(event){
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        setUserName(username);
        setPassword(password);
        axios
          .post("http://localhost:5000/login?username=amit@gmail.com&password=1234")
          .then(res => {
                console.log(res);
          })
          .catch(err => console.error(err));
    }

    return (<div>
        <form onSubmit={loginFormSubmitted}>
            <div className="mb-3">
            <label className="form-label">Email address</label>
             <input type="email" className="form-control" id="username"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="password"></input>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>);
}

export default LoginForm;