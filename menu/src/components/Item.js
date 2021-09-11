import React from 'react'

const Item = (props) => {
    const {id,title,category,price,img,desc}=props.item;
    
    return (
        <div className="item">
            <div className="img-container">
                <img  src={img}/>
            </div>
            <div className="info-container">
                <div className="header">
                    <h3>{title}</h3>
                    <h3>{price}</h3>
                </div>
                <div className="description">
                    <p>{desc}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Item
