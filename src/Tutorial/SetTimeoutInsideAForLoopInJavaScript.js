/* eslint-disable no-loop-func */
import React from 'react';
function SetTimeoutInsideAForLoopInJavaScript(type='') {
  switch (type) {
    case "let":
      //藉助let 的作用域 5 -> 0,1,2,3,4
      for (let i = 0; i < 5; i++) {
        // Delay each iteration by 1 second
        setTimeout(
          function () {
            console.log(i);
          },
          1000 * i,
          i
        );
      }
      break;
    case "var":
      //opuput 5 -> 5,5,5,5,5
      for (var i = 0; i < 5; i++) {
        // Delay each iteration by 1 second
        setTimeout(
          function () {
            console.log(i);
          },
          1000 * i,
          i
        );
      }
      break;
    case "IIFE":
      //immediately-invoked function expression
      for (var i_iife = 0; i_iife < 5; i_iife++) {
        ((j) => {
          setTimeout(() => {
            console.log(j);
          }, 1000);
        })(i_iife);
      }
      console.log('%c Enter IIFE', 
      'background-image: url(https://pic.pimg.tw/elizabeth15angel/1437747627-1122098840.jpg); background-size: 100% 100%;color:yellow;font-size: 40px;'
      ,'i_iife',i_iife);
      break;
    case "Promise":
      const task = [];
      const output = (i) =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(i);
            resolve();
          }, 1000 * i);
        });

      for (var i_Promise = 0; i_Promise < 5; i_Promise++) {
        task.push(output(i_Promise));
      }

      // 4.异步操作执行完成后输出最后的i
      Promise.all(task).then(() => {
        setTimeout(() => {
          console.log(i_Promise);
        }, 1000);
      });
      break;

    // case "async/await":
    //   const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    //   (async () => {
    //       for(var i = 0; i < 5; i++) {
    //           if (i > 0) {
    //               await sleep(1000)
    //           }
    //           console.log(i)
    //       }
    //       await sleep(1000)
    //       console.log(i)
    //   })()
    //   break;

    default:
      break;
  }

}




function customName() {
  let type="var";
  let questionText = `1. for (var i = 0; i < 5; i++) {
    setTimeout(() => { 
        console.log(i); 
    }, 1000); 
  }
  a. 為什麼結果會顯示5顯示五次？
  b. 為什麼結果是一次顯示，而非間隔一秒地顯示？
  c. 如何修改能間隔一秒，每秒顯示的是該次的i？`;

  return (
    <div>
      <textarea id="questionText" rows="10" cols="50" value={questionText} readOnly />

      {/* <p>Run SetTimeoutInsideAForLoopInJavaScript,var= {SetTimeoutInsideAForLoopInJavaScript("var")}</p>
      <p>Run SetTimeoutInsideAForLoopInJavaScript,let= {SetTimeoutInsideAForLoopInJavaScript("let")}</p> */}

      <p>Run SetTimeoutInsideAForLoopInJavaScript,{type} {SetTimeoutInsideAForLoopInJavaScript(type)}</p>


    </div>
    
  );
}
export default customName;

