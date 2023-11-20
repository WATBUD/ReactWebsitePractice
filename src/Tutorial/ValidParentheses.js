import React from 'react';

function isValid(string) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  for (let i = 0; i < string.length; i++) {
    const indexWord = string[i];//(
    console.log('%c map[indexWord]', 'background: black; color: white',map[indexWord]);
    if (map[indexWord]) {
      stack.push(indexWord);//)
      console.log('%c stack', 'background: blue; color: white',stack);
      // var tempStack =JSON.parse(JSON.stringify(stack));
      // //tempStack.pop();
      // console.log('%c stack.pop()', 'background: blue; color: white',tempStack.pop());

    } else if (indexWord !== map[stack.pop()]) {
      console.log('%c return false', 'background: white; color: red',map);
      return false;
    }
  }
  console.log('%c return stack', 'background: blue; color: white',stack);

  return stack.length === 0;
}



function CustomName() {
  return (
    <div>
      <p>"([{}])" {isValid("([{}])")?'true':'false'}</p>
    </div>
    
  );
}
export default CustomName;

