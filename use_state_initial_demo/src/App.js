import './App.css';
import React, { useState } from 'react';

function App() {

  // Declare a new state variable, which we'll call "count" & initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
