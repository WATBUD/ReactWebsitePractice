import React from 'react';



// function singleNumber(nums) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     console.log('%c result', 'background: blue; color: white',result);
//     result  ^= nums[i];
//   }
//   return result;
// }
function isSingleNumber(element,index,array) {
console.log('%c isSingleNumber()', 'background: blue; color: white',element,index,array);
  // 使用indexOf和lastIndexOf方法來找到元素在陣列中第一次和最後一次出現的位置
  let firstIndex = array.indexOf(element);
  let lastIndex = array.lastIndexOf(element);
   // 如果兩個位置相同，表示元素只出現了一次，返回true
   if (firstIndex === lastIndex) {
     return true;
   }
   
   // 否則，返回false
   return false;
}

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
  let array1 = [2, 3, 4, 2, 5, 6, 5];
  let answer1 = array1.find(isSingleNumber);

  let array2 = [5, 2, 7,9,1];
  let answer2= findFirstSingleNumber(array2);
//   console.log(firstSingleNumber); // 3
//   console.log('%c singleNumber', 'background: blue; color: white',singleNumber([4,1,2,1,2]));
// let num2 = 3;
// console.log('%c binary3', 'background: blue; color: white',num2.toString(2).padStart(4, '0'));
  return (
    <div>
      <p>findFirstSingleNumber:{JSON.stringify(array1)}= {answer1}</p>
      <p>findFirstSingleNumber:{JSON.stringify(array2)}= {answer2}</p>

      
    </div>
    
  );
}
export default customName;

