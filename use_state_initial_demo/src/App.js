import './App.css';
import React, { useState } from 'react';

function App() {

  // Declare a new state variable, which we'll call "count" & initialize it to 0
  const [count, setCount] = useState(0);
  const initialCount = count;
  let finalCount =0;
  if (count==0) {
    finalCount = count +1;
  }
  return (
    <div>
      <p>Initially count was {initialCount}.</p>
      <p>After I assign an incremented count to another variable, final count is: {finalCount}.</p>
      <p>Value of count is {count}.</p>
    </div>
  );
}

export default App;
