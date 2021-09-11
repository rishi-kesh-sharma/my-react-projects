import './App.css';
import React, { Component,useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

import "bootstrap/dist/css/bootstrap.min.css"
// import Items from './Items';
// import Add from "./Add";
function App() {
  
    const [item,setItem]=useState("");
    const [itemArray,setItemArray]=useState([]);

    
    const changeHandle=(e)=>{
       
        setItem(e.target.value);
      }
    const clickHandle=()=>{ 

        if(item){

            setItemArray([...itemArray,item]);
        }
        setItem("");
    } 
      
    const clickHandleRemove=(e)=>{
      var id=e.target.parentNode.id; 
      var filteredArray=itemArray.filter((val,index)=>id!=index);
      setItemArray(filteredArray);

  }
  return (
    <div className="container mt-5">
      <div className="inner-container col-lg-5 col-md-6 col-sm-8 col-10">
        <h1 className="text-center mt-3"> To Do List</h1>
        
        <div>
             <input type="text" placeholder="add item" 
                   value={item}
                   onChange={changeHandle}
             /> 
            <input className="btn btn-success " type="submit" role="button" value="add" 
                  onClick={clickHandle}

            />
             
        </div>
        <ul>
            {
             itemArray.map((item,index)=>{ 
                  return(
                      <li className="my-3">
                        <DeleteIcon id={index} onClick={clickHandleRemove} style={{color:"red",cursor:"pointer"}} />
                         <span className="mx-4">{item}</span>
                      </li>
                  )
              })
            } 

        </ul>
      </div>
          
    </div> 
  );
}

export default App;
