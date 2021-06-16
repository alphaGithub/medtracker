import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link  } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Contact from "./Contact";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserPage from './User';

function Nav(){
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item "><Link to="/home" class="nav-link">Home</Link></li>
      <li class="nav-item "><Link to="/about" class="nav-link">About</Link></li>
      <li class="nav-item "><Link to="/contact" class="nav-link">Contact</Link></li>
      <li class="nav-item "><Link to="/login" class="nav-link">Login</Link></li>
      <li class="nav-item "><Link to="/signup" class="nav-link">Signup</Link></li>
      </ul>
      
    </div>
    </div>
  </nav>
  );
}


export default Nav;