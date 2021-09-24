import './App.css';
import React, { Component,useState,useEffect } from 'react'
import Loading from './components/Loading';
import TabBtns from './components/TabBtns';

function App() {
  
  const url ='https://course-api.com/react-tabs-project'
  const [loading,setLoading]=useState(true);
const fetchData=async()=>{
  
  try{
    const rawData= await fetch(url);
    const d= await rawData.json();
     return d;
    setLoading(false)
    
  }
  catch(err){
    
    console.log(err);

  }
  
  
} 

useEffect(()=>{
  const data=fetchData();
},[])
if(loading)
{
  return  (

    <Loading   />
  )
}
// const data=fetchData();


   return (
     <div className="App">
     
       <TabBtns data={data} />
      
     </div>
   );

 

}

export default App;
