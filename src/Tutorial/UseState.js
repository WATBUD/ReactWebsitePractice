import React, { useState } from 'react';


function CustomName() {

  const [isShow, setIsShow] = useState(true);

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
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

