import React, { useState } from 'react';


function CustomName() {

  const [isShow, setIsShow] = useState(true);

  const [count, setCount] = useState(0);

  function handleClick() {
    // setCount(count + 1);
    // console.log("%c setCount(count + 1):", "color: blue");
    setCount(count + 1);
    setTimeout(() => {
      console.log("%c setCount((s)=>s + 1):", "color: blue");
      setCount(count + 1);
      //setCount((s)=>s + 1);
    }, 1000);
    
    // setCount(count + 1); //現在香爐是一支香你記得中午的時候把他變兩支香
    // setCount(count + 1); //現在香爐是一支香你記得中午的時候把他變兩支香
    // setCount((s) => s + 1); //你記得中午的時候去香爐多插一支香
    // setCount((s) => s + 1); //你記得中午的時候去香爐多插一支香
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+1</button>
      
      <div>
      ------------------------------------------------ <br/>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && <div>This element is visible</div>}
      
      </div>
    </div>
    
  );
}
export default CustomName;

