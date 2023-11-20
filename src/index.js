import React from 'react';
import ReactDOM from 'react-dom';
import DemoListUI from './DemoListUI/DemoListUI';
import EntryPage from './EntryPage';
import './index.css';
//************** Components **************
import OptionsMap from './Component/OptionsMap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NativeHTML from './native/NativeHTML';
import reportWebVitals from './reportWebVitals';
// const { test } = require('./Tutorial//QuestionBankDirectory');
// const root = ReactDOM.createRoot(document.getElementById('root'));
//************** PracticeExample **************
import FindSumOfFirstNNaturalNumbers from './Tutorial/FindSumOfFirst_N_Natural_Numbers';
import MergeArraysAndSortSlice from './Tutorial/MergeArraysAndSortSlice';
import SetTimeoutInsideAForLoopInJavaScript from './Tutorial/SetTimeoutInsideAForLoopInJavaScript';
import AssignASpecificNumberOfUniqueNumbers from './Tutorial/AssignASpecificNumberOfUniqueNumbers';
import CSSTutorial from './Tutorial/CSSTutorial';
import ProgressDIYUse from './Tutorial/ProgressDIYUse';
import TraversingAndRendering from './Tutorial/TraversingAndRendering';
import RpgGame from './RPG/RPG_Game';
import TutorialTemplate from './Tutorial/TutorialTemplate';
import FetchOpenAI from './Tutorial/FetchOpenAI';
import IsDragging from './Tutorial/IsDragging';
//************** ReactBasics **************
import UseOtherComponents from './Tutorial/UseOtherComponents';
import HookContext from './hook/hookContext';
import HookUseState from './hook/hookState';
import HookCallback from './hook/hookCallback';
import HookEffect from './hook/hookEffect';
import ReactFragment from './Tutorial/ReactFragment';
// import SlideOut from './UIDemo/SlideOut';
//************** leetcode **************
import LengthOfLongestSubstring3 from './Tutorial/LengthOfLongestSubstring3';
import ReverseInteger7 from './Tutorial/ReverseInteger7';
import PalindromeNumber9 from './Tutorial/PalindromeNumber9';
import RomanToInteger13 from './Tutorial/RomanToInteger13';
import LongestCommonPrefix14 from './Tutorial/LongestCommonPrefix14';
import ValidParentheses20 from './Tutorial/ValidParentheses20';
import MergeTwoSortedLists21 from './Tutorial/MergeTwoSortedLists21';
import MergeKSortedLists23 from './Tutorial/MergeKSortedLists23';
import ValidPalindrome125 from './Tutorial/ValidPalindrome125';
import FindFirstSingleNumber136 from './Tutorial/FindFirstSingleNumber136';
import MoveZeroes283 from './Tutorial/MoveZeroes283';
import FibonacciNumber509 from './Tutorial/FibonacciNumber509';

const ReactBasicsRoutes = [
  { path: "/ReactFragment", component: ReactFragment },
  { path: "/HookCallback", component: HookCallback },
  { path: "/HookEffect", component: HookEffect },
  { path: "/HookContext", component: HookContext },
  { path: "/HookUseState", component: HookUseState },
  { path: "/UseOtherComponents", component: UseOtherComponents },
];
const PracticeExampleRoutes = [
  { path: "/RpgGame", component: RpgGame },
  { path: "/TutorialTemplate", component: TutorialTemplate },
  { path: "/TraversingAndRendering", component: TraversingAndRendering },
  { path: "/FetchOpenAI", component: FetchOpenAI },
  { path: "/IsDragging", component: IsDragging },
  { path: "/MergeArraysAndSortSlice", component: MergeArraysAndSortSlice },
  { path: "/OptionsMap", component: OptionsMap },
  { path: "/CSSTutorial", component: CSSTutorial },
  { path: "/ProgressDIYUse", component: ProgressDIYUse },  
  { path: "/FindSumOfFirst_N_Natural_Numbers", component: FindSumOfFirstNNaturalNumbers },
  { path: "/AssignASpecificNumberOfUniqueNumbers", component: AssignASpecificNumberOfUniqueNumbers }
];
const technicalTrainingRoutes = [
  { path: "/LengthOfLongestSubstring3", component: LengthOfLongestSubstring3 },
  { path: "/ReverseInteger7", component: ReverseInteger7 },
  { path: "/PalindromeNumber9", component: PalindromeNumber9 },
  { path: "/RomanToInteger13", component: RomanToInteger13 },
  { path: "/LongestCommonPrefix14", component: LongestCommonPrefix14 },
  { path: "/ValidParentheses20", component: ValidParentheses20 },
  { path: "/MergeTwoSortedLists21", component: MergeTwoSortedLists21 },
  { path: "/MergeKSortedLists23", component: MergeKSortedLists23 },
  { path: "/ValidPalindrome125", component: ValidPalindrome125 },
  { path: "/FindFirstSingleNumber136", component: FindFirstSingleNumber136 },
  { path: "/MoveZeroes283", component: MoveZeroes283 },
  { path: "/FibonacciNumber509", component: FibonacciNumber509 },
];


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
    {/* <Route path="/useCallback" element={<useCallback />}></Route> */}

    <Routes>
      <Route path="/" element={<DemoListUI />} />
      <Route path="*" element={<DemoListUI />} />
      {PracticeExampleRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={React.createElement(route.component)}
        ></Route>
      ))}
      {ReactBasicsRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={React.createElement(route.component)}
        ></Route>
      ))}
      {technicalTrainingRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={React.createElement(route.component)}
        ></Route>
      ))}
      <Route path="/DemoListUI" element={<DemoListUI />}></Route>
      <Route path="/NativeHTML/:inputEmbedURL" element={<NativeHTML />}></Route>
      <Route
        path="/SetTimeoutInsideAForLoopInJavaScript"
        element={<SetTimeoutInsideAForLoopInJavaScript />}
      ></Route>
      {/* <Route path="/SlideOut" element={<SlideOut />}></Route> */}
      {/* <Route path=":teasmId" element={<NativeHTML />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
