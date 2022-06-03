import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>The Counter App Using State In React</h1>
      </header>

      <h2>
        <strong>Current value of the counter is :</strong> <h1>{count}</h1>
      </h2>

      <button onClick={() => setCount(0)}>Reset the Counter</button>
      <button onClick={() => setCount(count + 1)}>Increment the Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrement the Counter</button>
    </div>
  );
}

export default App;
