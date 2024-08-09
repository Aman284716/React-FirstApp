import { useState } from 'react';
import './App.css';

function App() {
  const [count,setcount] = useState(0);

  return (
    <div className="App">
      <header className="App">
        <h1>Hi LuZsec !</h1>
      </header>
      <h2>Value:{count}</h2>
      <button onClick={()=>setcount(0)}>reset</button>
      <button onClick={()=> count>=0? setcount(count+1):""}>Increment</button>
      <button onClick={()=> count<=0? "":setcount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
