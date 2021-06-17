import React from 'react-dom'
import Nav from "./Nav"

const contactName = [{name:"Amit Kushwaha",phone:"1234567",email:"amit@gmail.com"},
                    {name:"Rishabh",email:"rishabh@gmail.com"},
                    {name:"Chandra Mani",email:"moonstone@gmail.com"},
                    {name:"Bipin",email:"bipin@gmail.com"}];

function Contact(){
    return (
    <div>
    <Nav/>
    <div style={{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"10px",height:"100%"}}>
        <ul style={{listStyleType:"none"}}>
        {contactName.map(contact=>{
            return <li style={{padding:"10px 10px 10px 10px",width:"40%",float:"right"}}>
            <div class="card" >
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{"width":"100%"}}/>
                <div class="container">
                <h4 style={{}}><b>{contact.name}</b></h4>
                <p>{contact.email}</p>
            </div>
            </div>
            </li>
        })};
        </ul>
        </div>
    </div>);
}

export default Contact;