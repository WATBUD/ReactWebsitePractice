import React from 'react';

function isPalindromeString(num) {
  //console.log('%c isPalindromeString', 'background: blue; color: white',num);

  // 將整數轉換成字串
  let strNum = num.toString();
  // 比較正反兩個字串是否相同
  //console.log('%c isPalindromeString', 'background: blue; color: white',strNum.split('').reverse());

  if (strNum === strNum.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
var isPalindromeNum= function(num){
  console.log('%c isPalindromeNum', 'background: blue; color: white',num);

  // 複製一個原數字
  let originalNum = num;
  let reversedNum = 0;//1
  // 反轉整數
  while (num > 0) {

    reversedNum = reversedNum * 10 + num % 10;
    console.log('%c reversedNum', 'background: blue; color: white',reversedNum);

    num = Math.floor(num / 10);//122
    console.log('%c Math.floor', 'background: blue; color: white',num);

  }
  // 比較反轉後的數字和原數字是否相同
  if (originalNum === reversedNum) {
    return true;
  } else {
    return false;
  }
}


function PalindromeNumber() {

  // isPalindromeString(5);
  // isPalindromeNum(5);

  return (
    <div>
      ----------------------PalindromeNumber-------------------------- <br/>
      <p>isPalindromeNum: {isPalindromeNum(1221)?'true':'false'}</p>
      ----------------------isPalindromeNum-------------------------- <br/>
      <p>isPalindromeString: {isPalindromeString(3344)?'true':'false'}</p>

    </div>
    
  );
}
export default PalindromeNumber;

