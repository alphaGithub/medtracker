import { useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthApi from '../script/authApi';
import {logoutRequest} from "../script/auth"



function Sidebar(props){
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
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px",float:"left",height:"800px"}}>
    <ul className="nav nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/home" className="nav-link link-dark" data-toggle="tab" aria-current="page">
          <svg className="bi me-2" width="16" height="16"></svg>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#" className="nav-link link-dark" data-toggle="tab">
          <svg className="bi me-2" width="16" height="16"></svg>
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#" className="nav-link link-dark" data-toggle="tab">
          <svg className="bi me-2" width="16" height="16"></svg>
          Orders
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#" className="nav-link link-dark" data-toggle="tab">
          <svg className="bi me-2" width="16" height="16"></svg>
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#" className="nav-link link-dark" data-toggle="tab">
          <svg className="bi me-2" width="16" height="16"></svg>
          Customers
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <Link href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://www.w3schools.com/howto/img_avatar.png"
 alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>{props.userName}</strong>
      </Link>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><Link className="dropdown-item" href="#">New project...</Link></li>
        <li><Link className="dropdown-item" href="#">Settings</Link></li>
        <li><Link className="dropdown-item" to="#">Profile</Link></li>
        <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Sign out</Link></li>
      </ul>
    </div>
  </div>
    );
}

export default Sidebar;