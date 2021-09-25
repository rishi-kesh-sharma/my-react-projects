import react,{useState} from "react"
import logo from './logo.svg';
import './App.css';
import MarkDownText from "./MarkDownText";
function App() {
  const [text,setText]=useState("");
  const [isMarkDown,setIsMarkDown]=useState(false);
  let finalText="";
  const onChangeHandle=(e)=>{
const textValue=e.target.value;
const trimmedText=textValue.trim();
const splittedText=trimmedText.split('');
 
 



// removing the has and joining
if(splittedText[0]=="#" &&splittedText[1]!="")
{
   splittedText.splice(0,1);
   if(splittedText.length>0)
   {
    finalText= splittedText.reduce((total,value)=>{
      return total+value;
    })
    
   }
 
 
setIsMarkDown(true)
}
else{
  setIsMarkDown(false);

}

// joining the text
if(splittedText.length>0){ 
  finalText= splittedText.reduce((total,value)=>{
  return total+value;
})
}


setText(finalText);
}
console.log(isMarkDown);
// const display= document.querySelector(".display");

  
//  if(isMarkDown==true)
//  {
//   // display.classList.add("markdown");
//  }
//  if(isMarkDown==false)
//  {
// // display.classList.remove("markdown");
//  }
  return (
    <div className="App"> 
        <div className="board">
        <textarea  onChange={onChangeHandle}  >
                 
        </textarea >

        </div>
        <div className="display">
            {
              
            isMarkDown?<MarkDownText text={text}/>:text
            }
        </div>
    </div>
  );
}

export default App;
