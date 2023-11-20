import React from 'react';
import ReactDOM from 'react-dom';
import DemoListUI from './DemoListUI/DemoListUI';
import EntryPage from './EntryPage';
import './index.css';
import CSSTutorial from './Tutorial/CSSTutorial';
import ProgressDIYUse from './Tutorial/ProgressDIYUse';
import RpgGame from './RPG/RPG_Game';
import TutorialTemplate from './Tutorial/TutorialTemplate';
import FetchOpenAI from './Tutorial/FetchOpenAI';
import TraversingAndRendering from './Tutorial/TraversingAndRendering';
import ReactFragment from './Tutorial/ReactFragment';
import UseOtherComponents from './Tutorial/UseOtherComponents';
import IsDragging from './Tutorial/IsDragging';



//************** Components **************
import OptionsMap from './Component/OptionsMap';


//************** hook **************
import HookContext from './hook/hookContext';
import UseState from './hook/hookState';
import HookCallback from './hook/hookCallback';
import HookEffect from './hook/hookEffect';



import PalindromeNumber from './Tutorial/PalindromeNumber';
import RomanToInteger from './Tutorial/RomanToInteger';
import LongestCommonPrefix from './Tutorial/LongestCommonPrefix';
import ValidParentheses from './Tutorial/ValidParentheses';
import MergeTwoSortedLists from './Tutorial/MergeTwoSortedLists';
import MergeKSortedLists from './Tutorial/MergeKSortedLists';
import FindSumOfFirstNNaturalNumbers from './Tutorial/FindSumOfFirst_N_Natural_Numbers';
import MergeArraysAndSortSlice from './Tutorial/MergeArraysAndSortSlice';
import SetTimeoutInsideAForLoopInJavaScript from './Tutorial/SetTimeoutInsideAForLoopInJavaScript';
import AssignASpecificNumberOfUniqueNumbers from './Tutorial/AssignASpecificNumberOfUniqueNumbers';
import ValidPalindrome125 from './Tutorial/ValidPalindrome125';
import MoveZeroes283 from './Tutorial/MoveZeroes283';

import FindFirstSingleNumber from './Tutorial/FindFirstSingleNumber';

import LengthOfLongestSubstring from './Tutorial/LengthOfLongestSubstring';
// import SlideOut from './UIDemo/SlideOut';



import { BrowserRouter, Route, Routes } from "react-router-dom";
import NativeHTML from './native/NativeHTML';
import reportWebVitals from './reportWebVitals';
// const { LengthOfLongestSubstring } = require('./Tutorial//QuestionBankDirectory');



// const root = ReactDOM.createRoot(document.getElementById('root'));

// ========================================
ReactDOM.render(
  // <React.StrictMode>
  //   <Test1 />
  //   <Square />
  // </React.StrictMode>,
  // <HashRouter>
  //   <Route path="/native" component={native}/>
  // </HashRouter>,
  
  <BrowserRouter>
    {/* 
    <Test1 />
    <Square /> */}
    <EntryPage />
    {/* <ProgressDIYUse/> */}
    <Routes>
      <Route path="/" element={<DemoListUI />} />
      <Route path='*' element={<DemoListUI />} />
      <Route path="/DemoListUI" element={<DemoListUI />}></Route>
      <Route path="/NativeHTML/:inputEmbedURL" element={<NativeHTML />}></Route>
      <Route path="/OptionsMap" element={<OptionsMap />}></Route>
      <Route path="/useCallback" element={<useCallback />}></Route>
      <Route path="/CSSTutorial" element={<CSSTutorial />}></Route>
      <Route path="/ProgressDIYUse" element={<ProgressDIYUse />}></Route>
      <Route path="/UseState" element={<UseState />}></Route>
      <Route path="/HookCallback" element={<HookCallback />}></Route>
      <Route path="/HookEffect" element={<HookEffect />}></Route>
      <Route path="/TraversingAndRendering" element={<TraversingAndRendering />}></Route>
      <Route path="/RpgGame" element={<RpgGame />}></Route>
      <Route path="/UseOtherComponents" element={<UseOtherComponents />}></Route>
      <Route path="/TutorialTemplate" element={<TutorialTemplate />}></Route>
      <Route path="/ReactFragment" element={<ReactFragment />}></Route>
      <Route path="/FetchOpenAI" element={<FetchOpenAI />}></Route>
      <Route path="/HookContext" element={<HookContext />}></Route>
      <Route path="/PalindromeNumber" element={<PalindromeNumber />}></Route>
      <Route path="/RomanToInteger" element={<RomanToInteger />}></Route>
      <Route path="/LongestCommonPrefix" element={<LongestCommonPrefix />}></Route>
      <Route path="/ValidParentheses" element={<ValidParentheses />}></Route>
      <Route path="/MergeTwoSortedLists" element={<MergeTwoSortedLists />}></Route>
      <Route path="/MergeKSortedLists" element={<MergeKSortedLists />}></Route>
      <Route path="/FindSumOfFirst_N_Natural_Numbers" element={<FindSumOfFirstNNaturalNumbers />}></Route>
      <Route path="/IsDragging" element={<IsDragging />}></Route>

      <Route path="/FindSumOfFirst_N_Natural_Numbers" element={<FindSumOfFirstNNaturalNumbers />}></Route>
      <Route path="/MergeArraysAndSortSlice" element={<MergeArraysAndSortSlice />}></Route>
      <Route path="/SetTimeoutInsideAForLoopInJavaScript" element={<SetTimeoutInsideAForLoopInJavaScript/>}></Route>
      <Route path="/FindFirstSingleNumber" element={<FindFirstSingleNumber />}></Route>
      <Route path="/LengthOfLongestSubstring" element={<LengthOfLongestSubstring />}></Route>
      <Route path="/AssignASpecificNumberOfUniqueNumbers" element={<AssignASpecificNumberOfUniqueNumbers/>}></Route>
      <Route path="/ValidPalindrome125" element={<ValidPalindrome125/>}></Route>
      <Route path="/MoveZeroes283" element={<MoveZeroes283/>}></Route>




      {/* <Route path="/SlideOut" element={<SlideOut />}></Route> */}

      {/* <Route path=":teasmId" element={<NativeHTML />} /> */}

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
