import React from 'react';
import ReactDOM from 'react-dom';
import DemoListUI from './DemoListUI/DemoListUI';
import EntryPage from './EntryPage';
import './index.css';
import OptionsMap from './Tutorial/OptionsMap';
import CSSTutorial from './Tutorial/CSSTutorial';
import ProgressDIYUse from './Tutorial/ProgressDIYUse';
import UseState from './Tutorial/UseState';
import TestUseCallback from './Tutorial/TestUseCallback';
import TestHooks from './Tutorial/TestHooks';
import UseOtherComponents from './Tutorial/UseOtherComponents';

import RpgGame from './RPG/RPG_Game';
import TutorialTemplate from './Tutorial/TutorialTemplate';
import FetchOpenAI from './Tutorial/FetchOpenAI';
import TraversingAndRendering from './Tutorial/TraversingAndRendering';
import ReactFragment from './Tutorial/ReactFragment';
import UseContext from './Tutorial/UseContext';
import PalindromeNumber from './Tutorial/PalindromeNumber';
import RomanToInteger from './Tutorial/RomanToInteger';
import LongestCommonPrefix from './Tutorial/LongestCommonPrefix';
import ValidParentheses from './Tutorial/ValidParentheses';
import MergeTwoSortedLists from './Tutorial/MergeTwoSortedLists';
import MergeKSortedLists from './Tutorial/MergeKSortedLists';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NativeHTML from './native/NativeHTML';
import reportWebVitals from './reportWebVitals';
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
      <Route path="/TestUseCallback" element={<TestUseCallback />}></Route>
      <Route path="/TestHooks" element={<TestHooks />}></Route>
      <Route path="/TraversingAndRendering" element={<TraversingAndRendering />}></Route>
      <Route path="/RpgGame" element={<RpgGame />}></Route>
      <Route path="/UseOtherComponents" element={<UseOtherComponents />}></Route>
      <Route path="/TutorialTemplate" element={<TutorialTemplate />}></Route>
      <Route path="/ReactFragment" element={<ReactFragment />}></Route>
      <Route path="/FetchOpenAI" element={<FetchOpenAI />}></Route>
      <Route path="/UseContext" element={<UseContext />}></Route>
      <Route path="/PalindromeNumber" element={<PalindromeNumber />}></Route>
      <Route path="/RomanToInteger" element={<RomanToInteger />}></Route>
      <Route path="/LongestCommonPrefix" element={<LongestCommonPrefix />}></Route>
      <Route path="/ValidParentheses" element={<ValidParentheses />}></Route>
      <Route path="/MergeTwoSortedLists" element={<MergeTwoSortedLists />}></Route>
      <Route path="/MergeKSortedLists" element={<MergeKSortedLists />}></Route>


      

      {/* <Route path=":teasmId" element={<NativeHTML />} /> */}

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
