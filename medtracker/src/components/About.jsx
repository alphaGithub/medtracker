import React from 'react-dom'
import Nav from "./Nav";
import { CssBaseline } from '@material-ui/core';
import Contact from './Contact';
function About(){
    return (
    <div>
    <Nav/>
    <CssBaseline/>
    <div class="about-section">
            <h1>Medtracker</h1>
            <p>Track your Medicine Availability</p>
            <p>App displays medicine available in nearby Medical Stores</p>
    </div>
    <Contact/>
    </div>
    );
}

export default About;