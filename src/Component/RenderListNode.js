import React, { useState,useRef } from 'react';


export function ListNodeCurrent(props) {
  const next = useRef(props.next);
  return (
    <div>
      <span>value: {props.val}</span>
      {next.current && <ListNodeCurrent val={next.current.val} next={next.current.next} />}
    </div>
  );
}



export function ListNodeProps(props) {
  const { val, next } = props;
  return (
    <div>
      <span>{val}</span>
      { next && <ListNodeUI {...next} />}
    </div>
  );
}
export function ListNodeUI({ val, next }) {
  return (
    <li>
      {val}
      {next ? <ul><ListNodeUI {...next} /></ul> : null}
    </li>
  );
}



export function createListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


export function mergeTwoListNode (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  console.log('%c mergeTwoListNode', 'background: blue; color: yellow',l1.val,l2.val);
  if (l1.val < l2.val) {
      l1.next = mergeTwoListNode(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoListNode(l1, l2.next);
      return l2;
  }
};









//export default ListNodeUI;
