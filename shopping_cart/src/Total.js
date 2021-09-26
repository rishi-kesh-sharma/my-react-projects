import React from 'react'
import "./Total.css"
const Total = (props) => {

    // acquiring the props

        const {addedItemsArray,currentData}=props;
        var total=0;

        //totaling the price

        currentData.forEach(element => {
            const {id,price}=element;
            const mainid=id;
            addedItemsArray.forEach(item=>{
                const {id,quantity}=item;
                if(id==mainid)
                    {
                    total=total+quantity*price;
                    }
            })
            
        });

        // restricting the decimal upto two digits

        total=total.toFixed(2)
//    returning the jsx
            return (
                <div className="total-container">
                    <p>TOTAL</p>
                    <p>${total}</p>
                </div>
            )
}

export default Total
