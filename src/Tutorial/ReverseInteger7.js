import React from "react";
var testFunction2 = function (x) {
  let sign = x < 0 ? -1 : 1;
  //console.log('%c sign', 'background: blue; color: white',sign);
  const reversed = Math.abs(x).toString().split("").reverse().join("");
  const result = sign * Number(reversed);
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }
  return result;
};
var testFunction = function (x) {
  let reversed = 0;
  while (x !== 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.trunc(x / 10);
  }
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  return reversed > max || reversed < min ? 0 : reversed;
};

function CustomName() {
  return (
    <div>
      <p>testFunction:x = -120: &gt; {testFunction(-120)}</p>
      <p>testFunction2:x = -120: &gt; {testFunction2(-120)}</p>
    </div>
  );
}
export default CustomName;
