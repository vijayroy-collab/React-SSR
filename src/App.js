import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, SetCount] = useState(0);
  function increment() {
    SetCount(count + 1);
  }
  function decrement() {
    SetCount(count - 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </header>
    </div>
  );
}

export default App;
