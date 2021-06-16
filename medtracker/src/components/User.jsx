
import {useState} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from "./Search";
import Logout from './logout';

function Profile(props){
    return (<div>
        Profile
    </div>)
}

function Sidebar(){
    return (
        <div class="sidebar">
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );
}

function Order(){
    return (<div>
        Orders;
    </div>)
}
function UserPage(props){
    const [User,setUser] = useState({});
    console.log(props);
    if(props.loginStatus===true)
    {
        return (
        <Router>
            <Sidebar/>
            <div class="content">
            <Switch>
            <Route path="/home"><Home/></Route>
            <Route path="/profile"><Profile/></Route>
            <Route path="/logout"><Logout/></Route>
            </Switch>
            
            </div>
        </Router>
        );
    }
    else{
    return (<h1>False</h1>);
    }
}

export default UserPage;