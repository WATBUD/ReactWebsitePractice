/* eslint-disable no-loop-func */
import React from 'react';
// import { useState,useCallback,useEffect } from 'react';

function CustomName() {
  //let type="let";
  let questionText = `美股開盤時間是星期一至星期五上午9：30至下午16：00點，不過美國採夏令時間和冬令時間，對應到台灣的時間會有所不同：
  夏令時間（3月中-11月中）：台灣時間21：30~04：00
  冬令時間（11月中-3月中）：台灣時間22：30~05：00
  `;
  let corporationData = `  台灣證券交易所會在下午4點公布當天法人買賣超資料`;



  return (
    <div>
      <textarea id="questionText" rows="10" cols="50" value={questionText} readOnly />
      <textarea id="questionText" rows="10" cols="50" value={corporationData} readOnly />

      {/* <p>Run random6(42)={questionText}</p> */}
    </div>
    
  );
}
export default CustomName;

