import React from 'react'
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
function Card(props) {
  const   {Id,name,job,image,text}=props.data;
  const changeIndex=props.changeIndex;
  var currentIndex=props.currentIndex;
  const dataLength=props.dataLength;
  const clickHandleGt=()=>{
      if(currentIndex==3){
          currentIndex=0
          
      }
      else{
          
    currentIndex=currentIndex+1; 

      }
       changeIndex(currentIndex);

  }
  const clickHandleLt=()=>{
      if(currentIndex==0)
      {
          currentIndex=3
      }
      else{
        currentIndex=currentIndex-1;

      }
      
      changeIndex(currentIndex);
  }
  const clickHandleSurpriseMe=()=>{
      
 currentIndex=Math.trunc( Math.random()*dataLength);


 changeIndex(currentIndex);
  }
    return (
        <div className="card-container"> 
          <div className="image-container  rounded-circle">
              <img className="image rounded-circle"  src={image}/>
          </div>
          <p className="text-center mt-4 font-weight-bold text-capitalize name">{name}</p>
          <p className="text-center text-primary font-weight-bold text-capitalize job">{job}</p>
          <p className="text-center text">{text}</p>
          <div className="btn-container ">
              <span className="text-primary " onClick={clickHandleLt}>&lt;</span>
              <span className="text-primary " onClick={clickHandleGt}>&gt;</span>
           </div> 
             <div>
                    <button className=" btn btn-primary" onClick={clickHandleSurpriseMe} >Surprise me</button>
            </div>
        </div>
      
    )
}

export default Card
