import React from 'react';

function arrayToBinary(arr) {
  return arr.map(num => num.toString(2).padStart(4,'0'));
}

function XOR_SingleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result  ^= nums[i];
    //console.log('%c XOR_SingleNumber', 'background: blue; color: white',result);
  }
  return result;
}
function isSingleNumber(element,index,array) {
//console.log('%c isSingleNumber()', 'background: blue; color: white',element,index,array);
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

function singleNumberNewSet (nums) {
  var numSet = new Set();
  for (let num of nums) 
  {
      if (numSet.has(num)) 
      {
          numSet.delete(num);
      } 
      else 
      {
          numSet.add(num);
      }
  }
  return numSet.values().next().value;
};

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

function hashSingleNumber(nums) {
  const hash = {};
  for (const num of nums) {
    
    hash[num] = (hash[num] || 0) + 1;
    console.log('%c hashSingleNumber', 'background: blue; color: white',hash,hash[num] || 0);
  }
  for (const key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }
}

function customName() {
  let array1 = [2, 3, 4, 2, 5, 6, 5];
  let answer1 = array1.find(isSingleNumber);

  let array2 = [5, 2, 7,9,1];
  let answer2= findFirstSingleNumber(array2);

  let array3 = [4,1,2,1,2];
  let answer3= hashSingleNumber(array3);

  let answer4= XOR_SingleNumber([4,1,2,1,2]);
//   console.log(firstSingleNumber); // 3
//   console.log('%c singleNumber', 'background: blue; color: white',singleNumber([4,1,2,1,2]));
// let num2 = 3;
// console.log('%c binary3', 'background: blue; color: white',num2.toString(2).padStart(4, '0'));
  return (
    <div>
      <p>findFirstSingleNumber:{JSON.stringify(array1)}= {answer1}</p>
      <p>findFirstSingleNumber:{JSON.stringify(array2)}= {answer2}</p>
      <p>hashSingleNumber:{JSON.stringify(array3)}= {answer3}</p>
      <p>XOR_SingleNumber:{JSON.stringify(array3)}= {answer4}</p>
      <p>XOR_binary:{JSON.stringify(arrayToBinary(array3))}= {answer4}</p>
      <p>singleNumberNewSet:{JSON.stringify(singleNumberNewSet(array3))}= {answer4}</p>
    </div>
    
  );
}
export default customName;

