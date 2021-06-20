import { useContext } from 'react';
import AuthApi from '../script/authApi';
import Nav from "./Nav";
import Sidebar from './Sidebar';



function DashBoard(props){
    const authApi = useContext(AuthApi);
    console.log(authApi);
    if(authApi.auth){
        return (<div>
            <Sidebar userName={"Amit"}/>
            <div className="content">

            </div>
        </div>)
    }else{
        return (<div>
            <Nav/>
            <div style={{width:"50%",margin:"auto"}}>You are not Logged In</div>
        </div>)
    }
}

export default DashBoard;