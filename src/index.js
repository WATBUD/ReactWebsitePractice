import React from 'react';
import ReactDOM from 'react-dom';
import DemoListUI from './DemoListUI/DemoListUI';
import EffectHook from './EffectHook';
import EntryPage from './EntryPage';
import './index.css';
import OptionsMap from './PracticeTheBasicUI/OptionsMap';
import CSSTutorial from './Tutorial/CSSTutorial';
import ProgressDIY from './Tutorial/ProgressDIY';

import T_useCallback from './T_useCallback';

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

    <Routes>
      <Route path="/" element={<DemoListUI />} />
      <Route path='*' element={<DemoListUI />} />
      <Route path="/DemoListUI" element={<DemoListUI />}></Route>
      <Route path="/NativeHTML/:inputEmbedURL" element={<NativeHTML />}></Route>
      <Route path="/EffectHook" element={<EffectHook />}></Route>
      <Route path="/OptionsMap" element={<OptionsMap />}></Route>
      <Route path="/T_useCallback" element={<T_useCallback />}></Route>
      <Route path="/CSSTutorial" element={<CSSTutorial />}></Route>
      <Route path="/ProgressDIY" element={<ProgressDIY />}></Route>


      {/* <Route path=":teasmId" element={<NativeHTML />} /> */}

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
