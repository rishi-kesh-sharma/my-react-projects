import React from 'react'
import "./CartItem.css"
const CartItem = (props) => {

    // acquiring the data passsed and props

    const {itemData}=props;
    const {id,title,price,img,amount}=itemData;
    const {quantity}=props.addedItem;

    //checking if the quantity is zero

    if(quantity==0){
        props.removeItemCommunicator(id);
    }

    //clickHandle for remove button

    const clickHandle=()=>{
        props.removeItemCommunicator(id);
    }

    //clickHandle for increment button

    const increaseItemClickHandle=()=>{
        props.increaseItemCommunicator(id)

    }

    //clickHandle for decrement button

    const decreaseItemClickHandle=()=>{
         props.decreaseItemCommunicator(id);
    }
    
    //returning the default jsx

    return (
        <div className="cart-item">
           <div className="cart-item-image-container">
               <img  className="cart-item-image" src={img}/>
           </div>
           <div className="cart-item-info-container">
               <p className="title">{title}</p>
               <p className="price">${price}</p>
               <button  onClick={clickHandle} className="remove-btn">remove</button>

           </div>
           <div className="btns">
               <p onClick={increaseItemClickHandle}> &gt;</p>
               <p className="items-count">{quantity}</p>
               <p onClick={decreaseItemClickHandle}>&gt;</p>
           </div>
        </div>
    )
}

export default CartItem
