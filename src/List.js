

import React, {useCallback,useState, useEffect} from 'react';
export default function List({ inputItems }) {
  const [items, setItems] = useState([]);
  console.log('%c List_Enter', 'background: blue; color: white', inputItems);

  useEffect(() => {
    setItems(inputItems())
    console.log('%c List_useEffect', 'background: blue; color: white', inputItems);
  }, [inputItems]);//後面必須加入才會重覆Call

  return items.map(item => <div key={item}>key={item}</div>);
}


