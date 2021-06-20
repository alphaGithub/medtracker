import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import DashBoard from '../components/Dashboard';
import AuthApi from "../script/authApi"
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';
import Logout from '../components/Logout';

function Routes() {
  const authApi = useContext(AuthApi);
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route    path="/logout" component={Logout} />
      <RouteRegisteration   path="/signin"     component={SignIn}       isAuth={authApi.auth}/>
      <RouteRegisteration   path="/signup"     component={SignUp}       isAuth={authApi.auth}/>
      <RouteProtected       path="/dashboard"  component={DashBoard}    isAuth={authApi.auth}/>
    </Switch>
  );
}

const RouteLogout = ({ isAuth, component: Component, ...rest }) => {
  return (
  <Route  {...rest}   render={(props) =>isAuth ? <Component {...props} /> : <Redirect to="/signin" />}/>
  );
};

const RouteRegisteration = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route  {...rest}   render={(props) =>!isAuth ? <Component {...props} /> : <Redirect to="/dashboard" />}/>
  );
};

const RouteProtected = ({ isAuth, component: Component, ...rest }) => {
    console.log("routeDash :"+isAuth);
  return (<Route {...rest} render={(props) =>isAuth ? <Component {...props} /> : <Redirect to="/signin" />}/>
  );
};

export default Routes;