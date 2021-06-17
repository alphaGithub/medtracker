import React,{useState} from 'react';
import Nav from './Nav';
import axios from 'axios';
require('dotenv').config();
function MedItem(props){
    return (
            <li className="list-group-item">{props.medname}</li>
    );
}

function Search(){
    const [medList,setmedList] = useState([]);
    const [searchMed,setMed] = useState("");
    function searchingForMed(event){
        //let searchMed = event.target.value;
        const {name,value} = event.target;
        setMed(event.target.value);
        console.log(searchMed)
        console.log(event.target.value);
        if(event.target.value.length>0){
            axios
              .get(process.env.REACT_APP_EXPRESS_ADDRESS+"/medicine?medname="+event.target.value)
              .then(res => {
                  let data_recevied =res.data;
                  if(data_recevied.length==0)
                  {
                    setmedList(prevList=>{
                        return data_recevied;
                    });
                  }
                  else{
                      setmedList(prevList=>{
                          return data_recevied;
                      });
                  }
              })
              .catch(err => console.error(err));
              
        }
        else if(event.target.value.length==0){
            setmedList([]);
            setMed("");
        }
        

    }
    return (
        <div style={{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"150px",height:"100%"}}>
        <form class="d-flex">
        <input onChange={searchingForMed} name="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" autoComplete="off"></input>
       
        </form>
        <br></br>
        <ul class="list-group">
        {medList.map((medItem)=>{
            return <MedItem key={medItem._id} medname={medItem.medName}/>;
        })
        }
        </ul>
        </div>
    );
}

export default Search;