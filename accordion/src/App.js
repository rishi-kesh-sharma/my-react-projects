import './App.css';
import data from "./components/data"
import Set from "./components/Set";

function App() {
  return (
    <div className="container">
      <h1>Our FAQs</h1>
      {
        data.map((item)=>{
          return (
            <Set item={item}/>
          )
          
      })
    }
    </div>
  );
}

export default App;
