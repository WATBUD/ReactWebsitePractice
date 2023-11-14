/* eslint-disable no-loop-func */
import React from "react";

//import { useState } from "react";

function CustomName() {
  let inputString="test#^^&*6513520.0";
  let questionText = `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
  Given a string s, return true if it is a palindrome, or false otherwise.
  Example 1:
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.
  `;
  /**
   * @param {string} s
   * @return {boolean}
   */
  var ValidPalindrome125 = function (s) {
    console.log('%c Enter function', 
    'background-image: url(https://pic.pimg.tw/elizabeth15angel/1437747627-1122098840.jpg); background-size: 100% 100%;color:yellow;font-size: 40px;'
    ,'s',s);
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };


  return (
    <div style={{marginLeft:300}}>
      <textarea style={{height:500,marginLeft:0}}
        id="questionText"
        rows="10"
        cols="50"
        value={questionText}
        readOnly
      />
      <p>Run ValidPalindrome125 <br/>inputString={inputString} =
      {ValidPalindrome125(inputString)?'true':'false'}</p>
    </div>
  );
}
export default CustomName;
