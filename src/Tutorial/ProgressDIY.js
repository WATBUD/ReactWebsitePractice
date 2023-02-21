import React, { useEffect, useRef, useState } from 'react';
const ProgressDIY = (props) => {
  const [percent, setPercent] = useState(10);

  const mounted = useRef();
  const tm = useRef();
  const tmTwo = useRef();

  useEffect(() => {
    if (!mounted.current) {//componentDidMount
      setPercent(props.value);
      mounted.current = true;
    }
    else { //componentDidUpdate
      if (percent > props.value) {
        if (tm.current)
          clearTimeout(tm.current)
        tmTwo.current = setTimeout(() => { setPercent(percent - 1) }, 20);
      }
      else if (percent < props.value) {
        if (tmTwo.current)
          clearTimeout(tmTwo.current)
        tm.current = setTimeout(() => { setPercent(percent + 1) }, 20);
      }
    }

  }, [props.value, percent]);



  return (
    <div>
      <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
        <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: 10+ "%", height: "100%", borderRadius: "10px" }}>

        </div>
      </div>
      目前比率: {percent}%
      <button value={90} onClick={props.onClick}>增加比率至90</button>
      <button value={10} onClick={props.onClick}>減少比率至10</button>
    </div>
  )
}

export default ProgressDIY;