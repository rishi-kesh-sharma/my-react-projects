import React from 'react'
import "./Header.css"
// import

const Header = (props) => {
    

    // acquiring the props


  const {addedItemsArray}=props;

  
  var totalQuantity=0;

//   calculating the total quantity

  addedItemsArray.forEach((item)=>{
      const {quantity}=item;
      totalQuantity=totalQuantity+quantity;
  })

//   returning the jsx
    return (
        <div className="cart-header">
           <p> Rishi Cart</p>
           

           <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
           <i className="total-items" >{totalQuantity}</i>
          
        </div>
    )
}
export default Header;
