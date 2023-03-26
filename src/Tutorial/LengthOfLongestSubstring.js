import React from 'react';


function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  const set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {//
      console.log('%c right++', 'background: blue; color: white',right);
      set.add(s[right]);//0
      right++;
      //console.log('%c right++', 'background: blue; color: white',right);
      console.log('%c set', 'background: blue; color: white',set);
      maxLength = Math.max(maxLength, set.size);
    } else {
      set.delete(s[left++]);
      console.log('%c delete', 'background: blue; color: white',set);
    }
  }

  return maxLength;
}


function customName() {
  return (
    <div>
      {/* <p>"abcabcbb"= {lengthOfLongestSubstring("abcabcbb")}</p>
      <p>"bbbbb"= {lengthOfLongestSubstring("bbbbb")}</p> */}
      <p>"pwwkew"= {lengthOfLongestSubstring("pwwkew")}</p>

    </div>
    
  );
}
export default customName;

