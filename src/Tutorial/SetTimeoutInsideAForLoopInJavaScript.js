/* eslint-disable no-loop-func */
import React, { Fragment } from 'react';
import { useState } from 'react';






function CustomName() {
  //let type="let";
  let questionText = `1. for (var i = 0; i < 5; i++) {
    setTimeout(() => { 
        console.log(i); 
    }, 1000); 
  }
  a. 為什麼結果會顯示5顯示五次？
  b. 為什麼結果是一次顯示，而非間隔一秒地顯示？
  c. 如何修改能間隔一秒，每秒顯示的是該次的i？`;
  const [resultText, setResultText] = useState("none");
  const [isRunning, setIsRunning] = useState(false); // 用于追踪进程是否正在运行
  const onPressButton = (type='') => {
    if (isRunning) {
      console.log('Already running.');
      return;
    }
    setIsRunning(true);

    switch (type) {
      case "let":
        //藉助let 的作用域 5 -> 0,1,2,3,4
        for (let i = 0; i < 5; i++) {
          // Delay each iteration by 1 second
          setTimeout(
            function () {
              console.log(i);
              setResultText(i);
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
              setResultText(i);
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
              setResultText(j);
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
              setResultText(i);
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
            setResultText(i);
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

    setTimeout(() => {
      setIsRunning(false); 
    }, 5000);  

  }; // useCallback 的依赖列表为空，意味着函数只在组件首次渲染时创建一次

  // 3. var start = Date.now(); 
  // setTimeout(() => { 
  //  console.log('time passed: ', Date.now() - start, 'ms'); 
  // }, 1000); 
  // a. 請問每次顯⽰的時間是否皆為1000ms  不是,因為有延遲 Result:1001ms  
  // useEffect(() => {
  //   // 假设您只想在组件加载时运行此函数
  //   onPressButton(type);
  // }, [onPressButton, type]);




  return (
    <div>
      <textarea id="questionText" rows="10" cols="50" value={questionText} readOnly />

      {!isRunning &&(
        <Fragment>
      <button onClick={() => onPressButton('let')}>
        Run with let
      </button>
      <button onClick={() => onPressButton('var')}>
        Run with var
      </button>
      <button onClick={() => onPressButton('IIFE')}>
        Run with IIFE
      </button>
      <button onClick={() => onPressButton('Promise')}>
        Run with Promise
      </button>
      </Fragment>)}


      <p>Time: {resultText}</p>

      {/* <p>Run onPressButton,{type}=</p>
      <p>time:{resultText}</p> */}

    </div>
    
  );
}
export default CustomName;

