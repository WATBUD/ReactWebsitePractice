import React from 'react';
var reverseInteger2 = function(x) {
  let sign = x < 0 ? -1 : 1;
  //console.log('%c sign', 'background: blue; color: white',sign);
  const reversed = Math.abs(x).toString().split('').reverse().join('');
  const result = sign * Number(reversed);
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }
  return result;
}
var reverseInteger = function(x) {
  let reversed = 0;
  while (x !== 0) {
      const digit = x % 10;
      reversed = reversed * 10 + digit;
      x = Math.trunc(x / 10);
  }
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  return reversed > max || reversed < min ? 0 : reversed;
}

function customName() {
  return (
    <div>
      <p>reverseInteger:x = -120: &gt; {reverseInteger(-120)}</p>
    </div>
    
  );
}
export default customName;

