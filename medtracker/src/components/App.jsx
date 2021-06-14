import React, {userState} from 'react'
import {BrowserRouter as Router,Switch,Route,Link  } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Nav from "./Nav";

function App(){
    return (<div>
            <Header appName="Medtracker"/>
            <Nav/>
            <Footer/>
    </div>);
}

export default App;