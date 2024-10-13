// import { Alert } from "antd";
// import { useForm } from "antd/lib/form/Form";
import React from "react";
import { 
  //useEffect,
  useLayoutEffect  } from 'react';
function FnComponent() {
  useLayoutEffect(()=>{
    alert('Enter useEffect DidMount');
    // const asyncCleanup = async () => {
    //   // 执行异步任务
    //   //await someAsyncTask();
    //   //alert('Enter useEffect DidMount');

    //   alert('Async task completed');
    // };
    //asyncCleanup();
    return ()=>{
      alert('Enter useEffect WillUnmount');
    }
  },[])



  return (
    <div id="App" style={{top:'50px',position: 'absolute'}}>
    -------------FnComponent-------------
    </div>
  );
}




export default FnComponent;