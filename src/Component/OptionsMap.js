import React from "react";

const options = [
  {
    label: "red",
    value: "red",
  },
  {
    label: "blue",
    value: "blue",
  },
  {
    label: "green",
    value: "green",
  },
  {
    label: "pink",
    value: "pink",
  },
];
function OptionsMap(props) {
  console.log('%c OptionsMap_props', 'background: white; color: red', props);

  // function handleItemClick(item) {
  //   // console.log('%c handleItemClick', 'background: white; color: red', item.target.value);
  //   // console.log(`Option ${item.target.value} selected!`);
  //   props.setRootBGcolor(item.target.value);
  // }

  //class OptionsMap extends React.Component {
  return (
    <div id="App" style={{ top: '50px', position: 'absolute' }}>
      <div className="select-container">
        <select   onChange={(event)=>props.setRootBGcolor(event.target.value)}>
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
            >
              {option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default OptionsMap;