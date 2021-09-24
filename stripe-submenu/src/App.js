import './App.css';
import SideBar from "./SideBar"
import NormalNav from "./NormalNav";
import React,{useState,useEffect} from 'react'


function App() {
  const [showSideBarMenuIcon,setShowSideBarMenuIcon]=useState(true);
  
  useEffect(()=>{
      if(window.innerWidth<600)
      {
        setShowSideBarMenuIcon(true);
      }
      else{
        setShowSideBarMenuIcon(false)
      }
  },[])
  window.addEventListener("resize",()=>{
    if(window.innerWidth<600)
    {
      setShowSideBarMenuIcon(true);
    }
    else{
      setShowSideBarMenuIcon(false);
    }
  })
  return (
    <div className="container">
      <h2 className="logo" >Rishi</h2>
      
        {
          showSideBarMenuIcon?<SideBar/>:<NormalNav/>
        }
      
       <h1 className="content-header">
          Payments infrastructure
          for the internet
       </h1>
       <p className="para">
       Millions of companies of all sizes—from startups to Fortune
        500s—use Stripe’s software and APIs to accept payments, 
       send payouts, and manage their businesses online.
       </p>
       
       
    </div>
    
  );
} 

export default App;
