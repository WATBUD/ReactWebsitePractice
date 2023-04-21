import React, { useState } from "react";
import { SwitchTransition, CSSTransition,TransitionGroup } from "react-transition-group";
import "./SwitchTransition.css";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={toggle ? "Hello" : "World"}
          classNames="fade"
          timeout={3000}
        >
          <div className="box">{toggle ? "Hello" : "World"}</div>
        </CSSTransition>
      </SwitchTransition>
      <App2></App2>
    </div>
  );
};

export default App;


function App2() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" }
  ]);

  const addItem = () => {
    const newId = items.length + 1;
    const newItem = { id: newId, text: `Item ${newId}` };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="container">
      <h1>React Transition Group Example</h1>
      <button onClick={addItem}>Add Item</button>
      <TransitionGroup className="list">
        {items.map((item) => (
          <CSSTransition 
          key={item.id} 
          timeout={3000} 
          classNames="item">
            <div className="item" onClick={() => removeItem(item.id)}>
              {item.text}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
