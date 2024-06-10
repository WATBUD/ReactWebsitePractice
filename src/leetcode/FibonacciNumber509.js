/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
import React from "react";
import { useState, useEffect } from "react";

function CustomName() {
  let inputN = 3;
  const [logText, setLogText] = useState("");
  const [logText2, setLogText2] = useState("");

  // const [result, setResult] = useState("");
  // const [result2, setResult2] = useState("");

  let questionText = `The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

  F(0) = 0, F(1) = 1
  F(n) = F(n - 1) + F(n - 2), for n > 1.
  Given n, calculate F(n).
  `;
    //recursive function
  //recursion function
  let consoleLogStatement =`Run testFunction2 inputString=>${inputN}\n`;
  var testFunction2 = function (n) {
    consoleLogStatement +=`\n this.Round:${n}`;
    consoleLogStatement +=`\n inputNext:${n - 1}/${n-2}`;
    if (n <= 1) {
      return n;
    }
    let value1=testFunction2(n - 1);
    let value2=testFunction2(n - 2);

    consoleLogStatement +=`\n PLUS:${value1}+${value2}`;
    //let data=testFunction2(n - 1) + testFunction2(n - 2);
    return value1+value2;
  };
  useEffect(() => {
    testFunction(inputN);
    testFunction2(inputN);
    consoleLogStatement+=`\n RESULT:${testFunction2(inputN)}`;
    setLogText2(consoleLogStatement);

    return () => {};
  }, []);

  function testFunction(n) {
    let consoleLogStatement =`Run testFunction inputString=>${inputN}\n`;

    let f = new Array(n + 2); // 1 extra space for n = 0
    f[0] = 0;
    f[1] = 1;
    for (let i = 2; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
      consoleLogStatement += `\ni_${i},\nf[i - 1]=${f[i - 1]},\nf[i - 2]=${f[i - 2]},\nf[${i}]=${f[i]}\n`;
      // console.log(
      //   "%c Enter mainfunction",
      //   "background-image: url(https://pic.pimg.tw/elizabeth15angel/1437747627-1122098840.jpg); background-size: 100% 100%;color:yellow;font-size: 40px;",
      // );
    }
    consoleLogStatement +=`\nRESULT:${f[n]}`;
    setLogText(consoleLogStatement);
    return f[n];
  }





  return (
    <div style={{ marginLeft: 300 }}>
      <textarea
        style={{ height: 500, marginLeft: 0 }}
        id="questionText"
        name="w3review" 
        rows="10"
        cols="50"
        value={questionText}
        readOnly
      />
      <textarea
        style={{ height:'500px',width:'auto',marginLeft: 20 }}
        id="questionText2"
        value={logText}
        readOnly
      />
      <textarea
        style={{ height:'500px',width:'auto',marginLeft: 20 }}
        value={logText2}
        readOnly
      />
      {/* <p>
        Run testFunction <br />
        inputString=&gt;{inputN},result=&gt;
        {result}
        {testFunction2}
      </p> */}
    </div>
  );
}
export default CustomName;
