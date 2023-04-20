import React, { useState } from 'react';
import './SlideOut.css';
import OptionsMap from 'Component/OptionsMap';

function SlideOut(props) {
  const [isOpen, setIsOpen] = useState(false);
  // function handleClick() {

  // }

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log('%c handleToggle', 'background: white; color: red',props);
  };
  const setRootBGcolor = (color) => {
    console.log('%c SlideOut_setRootBGcolor', 'background: white; color: red',color);
    props.setBackgroundColor(color);
  };

  return (
    <div className={`slideout ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={handleToggle}>
        Click
      </button>
      <div className="content">
      <OptionsMap setRootBGcolor={setRootBGcolor}/>
      </div>
    </div>
  );
}

export default SlideOut;
