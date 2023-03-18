import React, { useState } from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>----------Child Component----------</h2>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>----------Parent Component----------</h1>
      <p>Count: {count}</p>
  
      <ChildComponent count={count} increment={()=>setCount(count + 1)} />
    </div>
  );
}


export default ParentComponent;
