import react,{useState,useEffect} from "react"
import './App.css';
import Cart from './Cart';
import Header from "./Header";
import data from "./data";

function App() {

  // states

  const [currentData,setCurrentData]=useState(data)
  const [addedItemsArray,setAddedItemsArray]=useState([])

  // useEffect for initializing the currentData state

  useEffect(()=>{ 
   const tempArray= currentData.map((item)=>{
      const {id}=item;
     const tempObject={id:id,quantity:1};
     return tempObject;
    });
    setAddedItemsArray(tempArray);
  },[currentData])

  // function to increase the no of quantity of particular item

  const increaseItemCommunicator=(returnedid)=>{
      const newAddedItemsArray=  addedItemsArray.map((d)=>{
      if(d.id==returnedid)
      {
          const currentQuantity=d.quantity;
          return {...d,quantity:currentQuantity+1}
      }
      else{
        return d;
      }
    })
    setAddedItemsArray(newAddedItemsArray);
  }

  // function to decrease the no of quantity of particular item

  const decreaseItemCommunicator=(returnedid)=>{
    const newAddedItemsArray=  addedItemsArray.map((d)=>{
      
      if(d.id==returnedid)
      {
          const currentQuantity=d.quantity;
          return {...d,quantity:currentQuantity-1}
       }
      else{
        return d;
      }
    })
     setAddedItemsArray(newAddedItemsArray);
  }

  // function to remove   particular item
  //
  const removeItemCommunicator=(id)=>{
   const filteredData= currentData.filter((dataItem)=>dataItem.id!=id);
    setCurrentData(filteredData);
    }

    // returning the jsx
    
  return ( 
        <div className="App">
              <Header addedItemsArray={addedItemsArray}/>
              <Cart  addedItemsArray={addedItemsArray} removeItemCommunicator={removeItemCommunicator} increaseItemCommunicator={increaseItemCommunicator} decreaseItemCommunicator={decreaseItemCommunicator} currentData={currentData}/> 
        </div>
  );
}

export default App;
