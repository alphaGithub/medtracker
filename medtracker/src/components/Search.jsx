import React,{useState} from 'react';
import headers from "../script/header_allow";
import axios from 'axios';
require('dotenv').config();



function MedItem(props){
    return (
            <li className="list-group-item">{props.medname}</li>
    );
}


function Search(){
    const [medList,setmedList] = useState([]);

    function searchingForMed(event){
        const {name,value} = event.target;
        let medName = {[name]:value};

        if(medName.medname.length>0){
            axios
              .get("/meds?medname="+medName.medname,{headers})
              .then(res => {
                  let data_recevied =res;
                  if(data_recevied.data.errors==null)
                  {
                    const result = data_recevied.data.result;
                    setmedList(prevList=>{
                        return result;
                    });
                  }
                  else{
                      const msg = data_recevied.data.errors[0].msg;
                      setmedList(prevList=>{
                          return [{_id:0,medName:msg}];
                      });
                  }
              })
              .catch(err => console.error(err));
              
            }
        else if(event.target.value.length===0){
                const msg = "";
                setmedList(prevList=>{
                          return [];
                      });
        }
        

    }
    return (
        <div style={{width:"100%",marginLeft:"auto",marginRight:"auto",marginTop:"150px",height:"100%"}}>
        <form className="d-flex">
        <input onChange={searchingForMed} name="medname" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" autoComplete="off"></input>
       
        </form>
        <br></br>
        <ul className="list-group">
        {medList.map((medItem)=>{
            return <MedItem key={medItem._id} medname={medItem.medName}/>;
        })
        }
        </ul>
        </div>
    );
}

export default Search;