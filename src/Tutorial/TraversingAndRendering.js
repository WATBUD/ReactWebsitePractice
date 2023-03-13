import React from 'react';

function TraversingAndRendering () {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      {items.map((item, index) => (
          <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default TraversingAndRendering;

