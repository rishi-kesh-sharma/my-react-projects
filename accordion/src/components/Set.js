import React,{useState} from 'react'
import QuestionOnly from './QuestionOnly';
import QuestionAnswer from "./QuestionAnswer"
import "../App.css"

const Set=(props) =>{
    const [show,setShow]=useState(false);
    const {id,info,title,}=props.item;
    const dataCommunicator=(boolVal)=>{
       setShow(boolVal);
    }
     if(show){
         return(
             <div className="set">

                 <QuestionAnswer title={title} info={info} dataCommunicator={dataCommunicator} />
             </div>
         )
     }
    return (
        <div className="set"  > 
            <QuestionOnly id={id} title={title} dataCommunicator={dataCommunicator} />
        </div>
    )
}

export default Set
