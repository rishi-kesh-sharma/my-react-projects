import React, { Component ,useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css"
const Items=(props)=>{
    const [items,setItems]=useState(props.items);
    console.log(props.items);
     
    const clickHandle=(e)=>{
        // console.log(e.target.parentNode);
        

    }
    return(
        <ul>
            {
             items.map((item)=>{ 
                  return(
                      <li className="my-3">
                        <DeleteIcon  onClick={clickHandle} style={{color:"red",cursor:"pointer"}} />
                         <span className="mx-4">{item}</span>
                      </li>
                  )
              })
            } 

        </ul>
    )
}
export default Items;