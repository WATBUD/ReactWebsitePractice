/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
import React, { Fragment } from "react";
import { useState } from "react";

function CustomName() {
  let inputN = 4;
  const [logText, setLogText] = useState('');

  let questionText = `The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

  F(0) = 0, F(1) = 1
  F(n) = F(n - 1) + F(n - 2), for n > 1.
  Given n, calculate F(n).
  `;
  function testFunction(n) {
    let f = new Array(n + 2); // 1 extra space for n = 0
    f[0] = 0;
    f[1] = 1;
    let consoleLogStatement='';
    for (let i = 2; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
      consoleLogStatement += `
        "i_"${i},
        "f[i - 1]_"${f[i - 1]},
        "f[i - 2]_"${f[i - 2]},
        f[${i}]_${f[i]}
      );`;
      // console.log(
      //   "%c Enter mainfunction",
      //   "background-image: url(https://pic.pimg.tw/elizabeth15angel/1437747627-1122098840.jpg); background-size: 100% 100%;color:yellow;font-size: 40px;",
      //   "i_"+i,
      //   "f[i - 1]_"+f[i - 1],
      //   "f[i - 1]_"+f[i - 2],
      //   "f["+i+"]"+f[i],
      // );
    }
          console.log(
        "%c Enter mainfunction",
        "background-image: url(https://pic.pimg.tw/elizabeth15angel/1437747627-1122098840.jpg); background-size: 100% 100%;color:yellow;font-size: 40px;",
        consoleLogStatement
      );
    //setLogText(consoleLogStatement);
    
    return f[n];
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
      <textarea style={{height:'auto',marginLeft:0}}
        id="questionText2"
        value={logText}
        readOnly
      />
      
      <p>Run testFunction <br/>inputString=&gt;{inputN},result=&gt;
      {testFunction(inputN)}</p>
    </div>
  );
}
export default CustomName;
