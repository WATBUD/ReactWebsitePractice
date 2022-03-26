import indexTitleIcon from './indexTitleIcon.png';
import './EntryPage.css';
import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function EntryPage() {
  console.log('%c EntryPage','background: red; color: white');
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/DemoListUI', {replace: true}), [navigate]);
  return (
          <div id="NavArea" >
              <div id="HomePage" class="NavItemStyle" onClick={handleOnClick}

              >HomePage</div>
          </div>
  );
}


function doThis() {
  console.log('%c doThis','background: red; color: white',doThis);


}
export default EntryPage;
