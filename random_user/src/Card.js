import React,{useState} from 'react'
import "./Card.css"
import {
    FaEnvelopeOpen,
    FaUser,
    FaCalendarTimes,
    FaMap,
    FaPhone,
    FaLock,
  } from 'react-icons/fa'

const Card = (props) => {
    var targetClassList=[];
    const {large,title,first,last,cell,gender,password,country,state,city,email,age}=props.info;
    const [currentArray,setCurrentArray]=useState([])
    const userArray=[
                     {type:"name",value:first},
                     {type:"name",value:last},
                     {type:"email",value:email},
                     {type:"age",value:age},
                     {type:"address",value:country},
                     {type:"address",value:city},
                     {type:"address",value:state},
                     {type:"phone_no",value:cell},
                     {type:"password",value:password}, 
                    
                    ]

                   

    const clickHandle=()=>{
        props.randomUserFinder();
        
    }
    const onMouseEnterHandle=(e)=>{
           targetClassList=e.target.classList;
         const  currentArray=   userArray.filter((value)=>targetClassList.contains(value.type)&&value.value)
             setCurrentArray(currentArray);
             
    }
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={large}/>
            </div>
            <div className="mid-container">
                <p>my info is</p>
                <p>

                   {
                         currentArray.length==0?`${first} ${last}`:  currentArray.map((value)=>
                            
                              <span>{value.value}</span>
                         )
                   }
                </p>
                    
                        
                 

            </div>
            <div className="icons">
                <button onMouseEnter={onMouseEnterHandle} className="name"><FaUser/></button>
                <button onMouseEnter={onMouseEnterHandle} className="email"><FaEnvelopeOpen/></button>
                <button onMouseEnter={onMouseEnterHandle} className="age"><FaCalendarTimes/></button>
                <button onMouseEnter={onMouseEnterHandle} className="address"><FaMap/></button>
                <button onMouseEnter={onMouseEnterHandle} className="phone_no"><FaPhone/></button>
                <button onMouseEnter={onMouseEnterHandle} className="password"><FaLock/></button>
            </div>
            <div className="random-button-container">
                <button onClick={clickHandle}>{props.loading?"loading":"random user"}</button>
            </div>
           
        </div>
    )
}

export default Card
