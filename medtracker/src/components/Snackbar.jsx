import {useState} from 'react';

function Snackbar(props){
    function myFunction() {
        if(props.value==="")
            return;
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
    return (<div id="snackbar" className="" onChange={myFunction()}>{props.value}</div>
    )
}

export default Snackbar;