import React from 'react';
function testFunction(strs) {
  if (!strs || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    console.log('%c strs[i].indexOf(prefix)', 'background: blue; color: white',strs[i].indexOf(prefix));
    console.log('%c strs[i]', 'background: blue; color: white',strs[i]);
    if(strs[i].indexOf(prefix) !== 0){
      console.log('%c === 0', 'background: blue; color: white',strs[i].indexOf(prefix));
    }
    while (strs[i].indexOf(prefix) !== -1) {//flow
      console.log('%c strs[i].indexOf(prefix)進入while', 'background: blue; color: white',strs[i].indexOf(prefix));

      prefix = prefix.substring(0, prefix.length - 1);//
      console.log('%c prefix', 'background: blue; color: white',prefix);
      if (prefix.length === 0) return "";
    }
  }
  return prefix;
}



function customName() {
  return (
    <div>
      <p>Test Array:["flower","flow","flight"] {testFunction(["so","bison"])}</p>
      <p>Test Array:["so","bison"] {testFunction(["flower","flow","flight"])}</p>

    </div>
    
  );
}
export default customName;

