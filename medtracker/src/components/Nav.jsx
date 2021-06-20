import React,{useContext} from 'react';
import {Link  } from "react-router-dom";
import AuthApi from '../script/authApi';
import {logoutRequest} from "../script/auth";
function Nav(){

  const authApi = useContext(AuthApi);
  const list1=[{name:"About",link:"/about"}]
  const list2=[{name:"Home",link:"/home"},
      {name:"About",link:"/about"},
      {name:"SignIn",link:"/signin"},{name:"SignUp",link:"/signup"}]
  function setList(list){
    return list.map(item=>{return <li className="nav-item "><Link to={item.link} className="nav-link">{item.name}</Link></li>})
  }

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
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {authApi.auth?(<button className="bg-success" style={{float:"right"}}><Link to="/dashboard">Back</Link></button>):null}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {authApi.auth?setList(list1):setList(list2)}
      {authApi.auth?(<li className="nav-item "><Link to="#" className="nav-link" onClick={handleLogout}>Logout</Link></li>):null}
      </ul>
    </div>
    </div>
  </nav>
  );
}


export default Nav;