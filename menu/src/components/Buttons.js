import React from 'react'
import "../App.css"

const Buttons = (props) => {
    const ButtonIdentifier=props.ButtonIdentifier;
    const data=props.data;
    const clickHandle=(e)=>{ 
       
        const itemType=e.target.classList[1];
        if(e.target.classList[1])
        {
            
        }


        
    const filteredData=data.filter((item)=>{
        return item.category==itemType;

      }) 
      if(itemType){
          
          ButtonIdentifier(filteredData);
      }
      else{
          ButtonIdentifier(data);
      }

    }
    return (
        <div className="btn-container">
            <button className="btn" onClick={clickHandle}>All</button>
            <button className="btn breakfast" onClick={clickHandle}>Breakfast</button>
            <button className="btn lunch" onClick={clickHandle}>Lunch</button>
            <button className="btn shakes" onClick={clickHandle}>Shakes</button>
            
            
        </div>
    )
}

export default Buttons
