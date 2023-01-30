import './App.css';
import React, {useState} from "react";
function App(){
  const [count,setCount] = useState(0);
  return (
      <div className="container">
          <div className="first">
              <div className="card-body">
                  <h1>Counter App</h1>
                  <div className="second">
                      <h2 className="third">{count}</h2>
                      <br />
                      <button className="btn-1" onClick={()=>setCount(count+1)}>Increment </button>
                      <button className="btn-2"onClick={()=>setCount(count-1)}>Decrement </button>
                      <button className="btn-3"onClick={()=>setCount(0)}>Reset </button>
                  </div>
              </div>
          </div>
          
      </div>
      
  );
}
export default App;