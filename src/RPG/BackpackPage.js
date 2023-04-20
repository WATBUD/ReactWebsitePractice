import React from 'react';
import './backpack.css';

const customName = () => {
  return (
    <div className="backpack">
      <div className="backpack-header">
        My Backpack
      </div>
      <div className="backpack-items">
        <div className="backpack-item">
          <img src="https://via.placeholder.com/50x50" alt="item" />
          Item 1
        </div>
        <div className="backpack-item">
          <img src="https://via.placeholder.com/50x50" alt="item" />
          Item 2
        </div>
        <div className="backpack-item">
          <img src="https://via.placeholder.com/50x50" alt="item" />
          Item 3
        </div>
      </div>
    </div>
  );
};

export default customName;
