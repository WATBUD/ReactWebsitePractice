import React from 'react';

function romanToInt(s) {
  let romanToIntMap = new Map();
  romanToIntMap.set('I', 1);
  romanToIntMap.set('V', 5);
  romanToIntMap.set('X', 10);
  romanToIntMap.set('L', 50);
  romanToIntMap.set('C', 100);
  romanToIntMap.set('D', 500);
  romanToIntMap.set('M', 1000);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    console.log('%c i', 'background: blue; color: white',i);

      let currentValue = romanToIntMap.get(s.charAt(i));
      let nextValue = romanToIntMap.get(s.charAt(i + 1));
      console.log('%c nextValue', 'background: blue; color: white',nextValue);

      if (nextValue && currentValue < nextValue) {
          result += nextValue - currentValue;
          i++;
      } else {
          result += currentValue;
      }
  }
  return result;
}



function PalindromeNumber() {
  return (
    <div>
      <p>romanToInt:LVIII= {romanToInt('LVIII')}</p>
    </div>
    
  );
}
export default PalindromeNumber;

