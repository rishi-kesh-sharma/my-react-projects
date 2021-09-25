import react,{useState,useEffect} from "react";
import './App.css';
import Card from "./Card";
import Loading from "./Loading";

function App() {


  const [loading,setLoading]=useState(0);
  const [changeUser,setChangeUser]=useState(false);
  const [info,setInfo]=useState({});
const url = 'https://randomuser.me/api/'


const fetchData=async()=>{

  try
  {
    const res= await fetch(url);
    const data= await res.json();
    console.log(data.results[0]);
    const {picture,gender,name,location,email,login,cell,dob}=data.results[0]
    const {title,first,last}=name;
    const {city,state,country}=location;
    const {password}=login;
    const {large}=picture;
    const {age}=dob;
    // console.log();
    const info={cell,large,title,first,last,gender,country,state,city,password,email,age}
   setInfo(info);
    // console.log(info);
    setLoading(false);

  }
  catch(err)
  {
    console.log(err);
  }
}

  
  useEffect(()=>{

  fetchData();
},[])

const randomUserFinder=()=>{
  // setChangeUser(value);
  fetchData();
   
}

if(loading)
{
  return <Loading/>
}

  return (
    <div className="App"> 
    {
     <Card loading={loading} info={info} randomUserFinder={randomUserFinder}/>
     
    }
      
    </div>
  );
}

export default App;
