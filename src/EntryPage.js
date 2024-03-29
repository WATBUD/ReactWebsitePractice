import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './EntryPage.css';



function EntryPage() {
  console.log('%c EntryPage','background: red; color: white');
  const navigate = useNavigate();
  fetch("https://appengine.googleapis.com/$discovery/rest?version=v1", {
    method: "GET",
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  })
    .then(res => res.json())
    .then(data => {
      //console.log('%c googleapis','background: red; color: white',data);
      /*接到request data後要做的事情*/
      
    })
    .catch(e => {
      //console.log('%c googleapis_error','background: red; color: white',e);
      /*發生錯誤時要做的事情*/
  })


  const handleOnClick = useCallback(() => navigate('/DemoListUI', {replace: true}), [navigate]);
  
  return (
          <div id="NavArea" >
              <div id="HomePage" className="NavItemStyle" onClick={handleOnClick}

              >HomePage</div>
          </div>
  );
}


export default EntryPage;
