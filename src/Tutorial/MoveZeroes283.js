/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
import React, { Fragment } from "react";
//import { useState } from "react";

function CustomName() {
  //let inputN = 4;
  let nums = [0,1,0,3,12];
  let questionText = `Given an integer array nums, 
  move all 0's to the end of it while maintaining the relative 
  order of the non-zero elements.
  `;


  function testFunction3(nums) {
    return   nums.sort((a, b) => b === 0 ? -1 : 0).join(',');
  }
  function testFunction1(nums) {
    return nums.sort((a, b) => (a === 0) - (b === 0)).join(',');
  }
  function testFunction2(nums) {
    let left = 0;

    for (let right=0; right<nums.length; right++) {//0/1/0/3/12 =>1/3/12/0/0
        if (nums[right] != 0) {//
            let tmp = nums[right];//1
            nums[right] = nums[left];
            nums[left] = tmp;
            left ++;
        }
    }
    return nums.join(',');
  }
  return (
    <div style={{marginLeft:300}}>
      <textarea style={{height:500,marginLeft:0}}
        id="questionText"
        rows="10"
        cols="50"
        value={questionText}
        readOnly
      />
      <p>Run testFunction1 <br/>inputNums=&gt;{nums.join(',')},result=&gt;{testFunction1(nums)}</p>
      <p>Run testFunction2 <br/>inputNums=&gt;{nums.join(',')},result=&gt;{testFunction2(nums)}</p>
      <p>Run testFunction3 <br/>inputNums=&gt;{nums.join(',')},result=&gt;{testFunction3(nums)}</p>

    </div>
  );
}
export default CustomName;
