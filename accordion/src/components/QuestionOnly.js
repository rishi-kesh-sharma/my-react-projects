import React from 'react'
import "../App.css"

const QuestionOnly = (props) => {
    const title=props.title;
    const dataCommunicator=props.dataCommunicator;
    const clickHandle=(e)=>{
        dataCommunicator(true)
        console.log(e.target);
    }
    dataCommunicator()
    return (
        <div> 
            <div className="question">
                <div className="show-icon" onClick={clickHandle}>
                <span>+</span>

                </div>
                <div className="question-text">
                  <p>{title}</p>
                 </div>
            </div> 
        </div>
    )
}

export default QuestionOnly
