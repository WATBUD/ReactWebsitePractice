import React from 'react';

function findSum(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++)
    sum += x;
  return sum;
}





//document.write(findSum(5));


function customName() {
  return (
    <div>
      <p>FindSumOfFirst_N_Natural_Numbers:5= {findSum(5)}</p>
    </div>
    
  );
}
export default customName;

