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
      //immediately-invoked function expression opuput 5 -> 5,5,5,5,5
      for (var i = 0; i < 5; i++) {
        ((j) => {
          setTimeout(() => {
            console.log(j);
          }, 1000);
        })(i);
      }
      console.log(i);
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

      for (var i = 0; i < 5; i++) {
        task.push(output(i));
      }

      // 4.异步操作执行完成后输出最后的i
      Promise.all(task).then(() => {
        setTimeout(() => {
          console.log(i);
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
  let type="IIFE";
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

