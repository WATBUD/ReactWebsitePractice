import React from 'react';
import ReactDOM from 'react-dom';
import DemoListUI from './DemoListUI/DemoListUI';
import EntryPage from './EntryPage';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NativeHTML from './native/NativeHTML';
import reportWebVitals from './reportWebVitals';
// const { test } = require('./Tutorial//QuestionBankDirectory');
// const root = ReactDOM.createRoot(document.getElementById('root'));
import {ReactBasicsRoutes,PracticeExampleRoutes,technicalTrainingRoutes,} from './PageConfig';

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
      {PracticeExampleRoutes.map((route,index) => (
        <Route
          key={index}
          path={route.path?route.path:('/'+route.text)}
          element={React.createElement(route.component)}
        ></Route>
      ))}
      {ReactBasicsRoutes.map((route,index) => (
        <Route
          key={index}
          path={route.path?route.path:'/'+route.text}
          element={React.createElement(route.component)}
        ></Route>
      ))}
      {technicalTrainingRoutes.map((route,index) => (
        <Route
          key={index}
          path={route.path?route.path:'/'+route.text}
          element={React.createElement(route.component)}
        ></Route>
      ))}
      <Route path="/DemoListUI" element={<DemoListUI />}></Route>
      <Route path="/NativeHTML/:InputEmbedURL" element={<NativeHTML />}></Route>
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
