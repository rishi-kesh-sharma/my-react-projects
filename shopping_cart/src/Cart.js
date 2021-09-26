import React from 'react'
import CartItem from './CartItem'
import "./Cart.css"
import Total from "./Total"
import Loading from './Loading'
const Cart = (props) => {

    //acquiring the data passed as props

    const {currentData}=props;
    const {addedItemsArray}=props;
    
    // checking if the currentData length is 0

    if(currentData.length==0)
    {
        return <h1>no items to show</h1>
    }

    //if the array length is more than 0

    if(addedItemsArray.length>0)
    {
        return (
            <div className="cart">
                <h1>YOUR BAG</h1>
                <div className="cart-items-container"> 
                        {
                            currentData.map((itemData)=>{
                              return  addedItemsArray.map((addedItem)=>{
                                  if(itemData.id==addedItem.id)
                                      return <CartItem itemData={itemData} addedItem={addedItem} key={currentData.id} removeItemCommunicator={props.removeItemCommunicator} increaseItemCommunicator={props.increaseItemCommunicator} decreaseItemCommunicator={props.decreaseItemCommunicator} itemData={itemData}/>
                                })

                            })
                        }
                </div>
                <div className="total-container">
                   <Total currentData={currentData} addedItemsArray={addedItemsArray}/>
    
                </div>
                
            </div>
        )

    }

    // this is default returning of jsx
    return(
        <Loading/>
    )
}

export default Cart
