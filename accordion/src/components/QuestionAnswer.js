import React from 'react'
import "../App.css"

const QuestionAnswer = (props) => {
    const {title,info}=props; 
    const dataCommunicator=props.dataCommunicator;
    const clickHandle=()=>{
       dataCommunicator(false);
    }
    return (
        <div> 
            <div className="question">
                <div className="hide-icon" onClick={clickHandle}>
                <span>-</span>

                </div>
                <div className="question-text">
                  <p>{title}</p>
                 </div>
            </div>
            <div  className="answer">
                <p>{info}</p>
            </div>
        </div>
    )
}

export default QuestionAnswer
