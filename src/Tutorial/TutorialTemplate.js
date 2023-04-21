import React from "react";

const optionsA = [
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
// const optionsB = [
//   {
//     label: "optionsBApple",
//     value: "apple",
//   },
//   {
//     label: "optionsBMango",
//     value: "mango",
//   },

// ];

// const optionsC = [
//   {
//     label: "optionsC",
//     value: "apple",
//   },
//   {
//     label: "optionsCMango",
//     value: "mango",
//   },

// ];

class OptionsMap extends React.Component {
  render() {
    return (
      <div id="App" style={{top:'50px',position: 'absolute'}}>
        -------------ParentComponent-------------

        <div className="select-container">
             <ArrayComponent DynamicOptions={
              optionsA
             }/>
        </div>
      </div>
    );
  }
}





function ArrayComponent(props) {
  console.log(props);
  return (
    <select>
        -------------ArrayComponent-------------
      {props.DynamicOptions.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default OptionsMap;