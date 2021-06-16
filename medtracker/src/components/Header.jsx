function Header(props){
    return (
        <header style={{background:"#a1e09e"}}>
            <h1 style={{marginBottom:"unset"}}>{props.appName}</h1>
        </header>
    );
}

export default Header;