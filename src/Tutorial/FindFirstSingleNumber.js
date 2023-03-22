import React from 'react';

let arr = [2, 3, 4, 2, 5, 6, 5];
function isSingleNumber(element) {
console.log('%c isSingleNumber()', 'background: blue; color: white',element);

  // 使用indexOf和lastIndexOf方法來找到元素在陣列中第一次和最後一次出現的位置
  let firstIndex = arr.indexOf(element);
  let lastIndex = arr.lastIndexOf(element);
   // 如果兩個位置相同，表示元素只出現了一次，返回true
   if (firstIndex === lastIndex) {
     return true;
   }
   
   // 否則，返回false
   return false;
}

let firstSingleNumber = arr.find(isSingleNumber);
console.log(firstSingleNumber); // 3

function findFirstSingleNumber(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === 1) {
      return nums[i];
    }
  }
  return null;
}


function customName() {
  return (
    <div>
      <p>findSingleNumber:[5, 2, 7,9,1]= {findFirstSingleNumber([5, 2, 7,9,1])}</p>
    </div>
    
  );
}
export default customName;

