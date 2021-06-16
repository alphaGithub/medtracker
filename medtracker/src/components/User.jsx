
import {useState} from 'react';

function Profile(props){
    return (<div>
        {props.info.firstName}
        {props.info.lastName}
        {props.info._id}
    </div>)
}
function UserPage(props){
    const [User,setUser] = useState({});
    console.log(props);
    if(props.loginStatus===true)
    {
        return <Profile info={props.userData}/>;
    }
    else{
    return (<h1>False</h1>);
    }
}

export default UserPage;