import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;

