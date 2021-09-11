import './App.css';
import React, { useState } from 'react'
import "./App.css"
import data from "./components/data"
import Card from "./components/Card"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [currentIndex,setCurrentIndex]=useState(0);
  const ChangeIndex=(index)=>{
 setCurrentIndex(index);
  }
  return (
    <div className="container">
      <h1 className="text-center">Our Reviews</h1>
    <Card currentIndex={currentIndex} dataLength={data.length} data={data[currentIndex]} changeIndex={ChangeIndex}/>
    </div>
  );
}

export default App;
