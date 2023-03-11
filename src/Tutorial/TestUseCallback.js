import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // 使用 useCallback 將 handleIncrement 記憶化
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
}

function ChildComponent({ onIncrement }) {
  // 使用 useCallback 將 handleButtonClick 記憶化
  const handleButtonClick = useCallback(() => {
    onIncrement();
  }, [onIncrement]);

  return (
    <div>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
}

export default ParentComponent;



