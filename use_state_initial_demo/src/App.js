import './App.css';
import React, { useState } from 'react';

function App() {

  // Declare a new state variable, which we'll call "count" & initialize it to 0
  let [count, setCount] = useState(0);
  const initialCount = count;
  let finalCount =count +1;
    if (count==0) {// this is needed to ensure setCount is called once only
    setCount(3);// this changes initialCount to 3 & finalCount to 4 in re render
  }
    count = 2; // this does not affect initialCount & finalCount

  return (
    <div>
      <p>Initially count was {initialCount}.</p>
      <p>Final count is: {finalCount}.</p>
      <p>Value of count is {count}.</p>
    </div>
  );
}

export default App;
