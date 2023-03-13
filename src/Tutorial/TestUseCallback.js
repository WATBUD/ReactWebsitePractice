//大部分情況下，我們都不需要用到 useCallback
//使用 useCallback 後，只要它的 dependencies[]沒有改變，
//就可以指到同一個函式，把函式放到 useEffect 的 dependencies[] 後，就不會重新呼叫 useEffect 內的功能(因為沒有改變)
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  console.log('MyComponent rendered'); // 添加调试信息
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleIncrement2 = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement2}>Increment</button>

    </div>
  );
}

export default Counter;

