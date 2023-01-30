import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [count , setCount] = useState(0);
  return (
    <div className="Container my-5">
      <div className="card text-center my-5">
       <div className='card-body'>
       <h1>Counter App</h1>
       <div className='my-5'>
       <h2 className='my-5'>{count}</h2>
       <button className="btn btn-success mx-3" onClick={()=> setCount(count + 1)}>Increment</button>
       <button className="btn btn-danger mx-3" onClick={()=> setCount(count - 1)}>Decrement</button>
      </div>
      <h3>Done by:- Turwash Chakraborty , Reg.No :- 12101607</h3>
    </div>
    </div>
    </div>

  );
}

export default App;