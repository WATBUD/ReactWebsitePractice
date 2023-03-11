import React, { useState } from 'react';
import ProgressDIY from './ProgressDIY';

function ProgressDIYUse(){
  const [value, setValue] = useState(10);
  console.log('%c ProgressDIYUse', 'background: red; color: white', ProgressDIYUse);

  return (
    <ProgressDIY value={value} onClick={(e) => { setValue(e.target.value) }} />
  );
}
export default ProgressDIYUse;