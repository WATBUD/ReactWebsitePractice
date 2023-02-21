import React from "react";
import './CSSTutorial.css';
const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];
const bgcolor={
  background: 'blue',
  color:'yellow'
}
class CSSTutorial extends React.Component {
  render() {
    return (
      <div id="App" >
        <div>
          <select className="bgColor">
            {options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default CSSTutorial;