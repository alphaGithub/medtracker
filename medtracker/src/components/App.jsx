import React, {userState} from 'react'
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Nav from "./Nav";
import Home from "./Home";
import About from "./About"
import Contact from "./Contact";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserPage from './User';

function App(){
    return (
            <Router>
                <Header appName="Medtracker"/>
            <switch>
                <Route exact path="/" component={Home}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/login'><LoginForm /></Route>

                <Route path='/signup'><SignupForm/></Route>
                <Route path="/user/:id"><UserPage/></Route>
                </switch> 
                <Footer/>
            </Router>
           
            );
}

export default App;