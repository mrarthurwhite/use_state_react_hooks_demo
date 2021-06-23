import './App.css';
import React, { useState } from 'react';

function App() {

  // Declare a new state variable, which we'll call "count" & initialize it to 0
  const [count, setCount] = useState(0);
  let initialCount = count;
  if (count==0) {
    let finalCount = count +1;
    setCount(finalCount);
  }
  return (
    <div>
      <p>Initially count was {initialCount}.</p>
      <p>After I set it count is {count}.</p>
    </div>
  );
}

export default App;
