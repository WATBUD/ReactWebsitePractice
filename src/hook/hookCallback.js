//大部分情況下，我們都不需要用到 useCallback
//使用 useCallback 後，只要它的 dependencies[]沒有改變，
//就可以指到同一個函式，把函式放到 useEffect 的 dependencies[] 後，就不會重新呼叫 useEffect 內的功能(因為沒有改變)

// 當你在 React 中需要傳遞函數作為 prop 時，你可以使用 
//useCallback 來優化性能。當你不使用 useCallback 時，
//每次當父元件重新渲染時，該函數都會被重新創建。這可能會導致子元件重新渲染，即使它們的 prop 沒有實際改變。 

import React, { useState, useCallback,memo } from 'react';
//const name = 'John';

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
    console.log('%c ParentCount', 'background: blue; color: white',count);
  }, [count]);//需要監控的Render

  console.log('Rendering Parent');

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
      <Greeting name={'louis'} />
    </div>
  );
};

export default Parent;


const Child = memo(({ onClick }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    onClick();
    console.log('%c handleClickCount', 'background: blue; color: white',count);

  };

  console.log('Rendering Child');

  return (
    <div>
      <p>Child count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
});
function Greeting(props) {
  console.log('Greeting',props);
  return <h1>Hello, {props.name}!</h1>;
}

//export default Child;
