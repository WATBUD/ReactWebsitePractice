import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EntryPage from './EntryPage';
import Test1 from './Test1';
import DemoListUI from './DemoListUI/DemoListUI';
import { BrowserRouter, HashRouter, Routes, Route, Link,useParams } from "react-router-dom";
import NativeHTML from './native/NativeHTML';

import reportWebVitals from './reportWebVitals';

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
      <Route path="/DemoListUI" element={<DemoListUI />}></Route>
      <Route path="/NativeHTML/:inputEmbedURL" element={<NativeHTML />}></Route>

      {/* <Route path=":teasmId" element={<NativeHTML />} /> */}

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
