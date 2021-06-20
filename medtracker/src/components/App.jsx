import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import AuthApi from "../script/authApi"
import Routes from "../routes/Route"
import { hasSigned } from '../script/auth';

function App(){
    const [auth,setAuth] = useState(false);

    const readSession = async()=>{
        const res = await hasSigned();
        console.log(res);
        console.log("hello");
        if(res.data.login){
            setAuth(true);
        }else{
            setAuth(false);
        }
    };
    useEffect(()=>{
      readSession();
    },[]);


    return (
            <AuthApi.Provider value={{auth,setAuth}}>
            <Router>
                <Header appName="Medtracker"/>
                <Routes/>
                <Footer/>
                </Router>
            </AuthApi.Provider>
            );
}

export default App;