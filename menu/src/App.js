import './App.css';
import  data from "./components/data"
import Buttons from './components/Buttons';
import React,{useState} from 'react'
import Item from './components/Item';

function App() {
  const [itemGroup,setItemGroup]=useState(data);

  const ButtonIdentifier=(currentItemGroup)=>{
    setItemGroup(currentItemGroup);

  }


  
  return (
    <div className="container">
      <h1>Our Menu</h1>
      <div>
        <Buttons data={data}  ButtonIdentifier={ButtonIdentifier} />

      </div>
      <div className="items"> 

       {
         itemGroup.map((item)=>{
           return <Item  item={item}/>
         })
       }
      
      </div>

           
    </div>
  );
}

export default App;
