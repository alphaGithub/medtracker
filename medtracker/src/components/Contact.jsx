import React from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline';

const contactName = [{id:1,name:"Amit Kushwaha",phone:"1234567",email:"amit@gmail.com"},
                    {id:2,name:"Rishabh",email:"rishabh@gmail.com"},
                    {id:3,name:"Chandra Mani",email:"moonstone@gmail.com"},
                    {id:4,name:"Bipin",email:"bipin@gmail.com"}];

function Contact(){

    return (
    <div>
    <CssBaseline />
    <div style={{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"10px",height:"100%"}}>
        <ul style={{listStyleType:"none"}}>
        {contactName.map(contact=>{
            return <li key={contact.id} style={{padding:"10px 10px 10px 10px",width:"200px",float:"left"}}>
            <div className="card" >
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{"width":"100%"}}/>
                <div className="container">
                <h4 style={{}}><b>{contact.name}</b></h4>
                <p>{contact.email}</p>
            </div>
            </div>
            </li>
        })}
        </ul>
        </div>
    </div>);
}

export default Contact;