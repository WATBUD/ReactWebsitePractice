/* eslint-disable no-loop-func */
import React from 'react';
// import { useState,useCallback,useEffect } from 'react';

function CustomName() {
  //let type="let";
  let questionText = `請實作input為1到該數字的隨機取六個不重複數字，以下為舉例。(邏輯) 
  random6(42) = [1,5,34,13,25,42]; 
  random6(56) = [1,55,34,13,25,56]; 
  `;

  function random6(maxNum) {
    if (maxNum < 6) {
        //throw new Error("Input number must be at least 6");
        return "Input number must be at least 6"
    }

    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * maxNum) + 1;
        numbers.add(randomNumber);
    }

    return Array.from(numbers).join(',');
}




  return (
    <div>
      <textarea id="questionText" rows="10" cols="50" value={questionText} readOnly />
      {/* <p>Time: {resultText}</p> */}

      <p>Run random6(42)={random6(42)}</p>
      <p>Run random6(3)={random6(3)}</p>
    </div>
    
  );
}
export default CustomName;

