import React from 'react';
const arr1 = [1, 7, 2,12,2];
const arr2 = [77, 52, 15,56,3];
const mergedArr = arr1.concat(arr2).sort((a, b) => a - b).slice(0,8);
function customName() {
  return (
    <div>
      <p>MergeArraysAndSort:[1, 7, 2,12,2],[77, 52, 15,56,3]= {JSON.stringify(mergedArr)}</p>
    </div>
    
  );
}
export default customName;

