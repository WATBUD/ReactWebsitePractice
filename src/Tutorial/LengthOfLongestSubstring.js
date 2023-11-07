import React from 'react';
function length_Of_Longest_Substring_For_Set(inputString) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  const set = new Set();
  while (right < inputString.length) {
    if (!set.has(inputString[right])) {//
      console.log('%c !set.has(inputString[right]', 'background: blue; color:yellow;font-size: 40px;',right);
      set.add(inputString[right]);//0
      right++;
      //console.log('%c right++', 'background: blue; color: white',right);
      console.log('%c latest=>set', 'background: blue;color:yellow;font-size: 40px;',Array.from(set));
      maxLength = Math.max(maxLength, set.size);
    } else {
      set.delete(inputString[left++]);
      console.log('%c set.has(inputString[right]=>delete', 'background: blue;color:yellow;font-size: 40px;',Array.from(set));
    }
  }
  return maxLength;
}
var length_Of_Longest_Substring_For_Set_2 = function(inputString) {
  let set = new Set(); 
  let left = 0; 
  let maxSize = 0; 
  console.log('set',Array.from(set))
  if (inputString.length === 0) return 0;
  if (inputString.length === 1) return 1;
  for (let i = 0; i < inputString.length; i++) {
      console.log('i ===', i, 'inputString.length ===', inputString.length)
      while (set.has(inputString[i])) {
        console.log('%c Enter while set.has', 
        'background-image: url(https://pic.pimg.tw/elizabeth15angel/1437747627-1122098840.jpg); background-size: 100% 100%;color:yellow;font-size: 40px;'
        ,'left',left);
          set.delete(inputString[left])
          left++;
      }
      set.add(inputString[i]);
      console.log('AFTER set.add=>'+inputString[i],Array.from(set))


      maxSize = Math.max(maxSize, i - left + 1)
      console.log('maxSize:', maxSize)
  }
   
return maxSize;
}


function customName() {
  return (
    <div>

      {/* <p>"k"= {length_Of_Longest_Substring_For_Set("k")}</p>
      <p>"k"= {length_Of_Longest_Substring_For_Set_2("k")}</p>
 */}


      {/* <p>"pwwkew"= {length_Of_Longest_Substring_For_Set("pwwkew")}</p>
      <p>"pwwk"= {length_Of_Longest_Substring_For_Set("pwwk")}</p> */}

      {/* <p>"pwwkew"= {length_Of_Longest_Substring_For_Set_2("pwwkew")}</p> */}
      <p>"pwwk"= {length_Of_Longest_Substring_For_Set_2("pwwk")}</p>

    </div>
    
  );
}
export default customName;

