function Footer(){
    return (
        <footer style={{background: "rgb(161, 224, 158)",position:"fixed",width:"100%",margin:"auto",left:0,bottom:0,textAlign:"center"}}>
            <p>{'Copyright © '}{new Date().getFullYear()}{'.'}</p>
        </footer>
    );
}

export default Footer;