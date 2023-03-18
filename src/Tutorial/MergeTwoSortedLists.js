import React, { useEffect, useState } from 'react';
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const listNode1 = new ListNode(1, new ListNode(2, new ListNode(4)));//124 
const listNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));//134
//console.log('%c mergeTwoLists', 'background: blue; color: white',listNode1,listNode2);

function mergeTwoLists(l1, l2) {
  console.log('%c mergeTwoLists', 'background: blue; color: white',l1,l2);
  const tempNode = new ListNode(0);
  let currentNode = tempNode;
  while (l1 && l2) {// 1 2
    console.log('%c tempNode', 'background: blue; color: PINK',tempNode);
    console.log('%c currentNode', 'background: blue; color: yellow',currentNode);

    if (l1.val < l2.val) {//1<2
      currentNode.next = l1;  //currentNode.next =1 l1=l1.next
      l1 = l1.next;
    } else {
      currentNode.next = l2; 
      l2 = l2.next;
    }
    currentNode = currentNode.next;//l1.next
  }

  if (l1) {
    currentNode.next = l1;
  }
  if (l2) {
    currentNode.next = l2;
  }
  return tempNode.next;
}


//console.log('%c mergeTwoLists()', 'background: blue; color: white',mergeTwoLists(listNode1,listNode2));

// const list = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: null,
//     },
//   },
// };

function ListNodeUI({ val, next }) {
  return (
    <li>
      {val}
      {next ? <ul><ListNodeUI {...next} /></ul> : null}
    </li>
  );
}

const _mergeTwoLists=mergeTwoLists(listNode1,listNode2);

function MergeTwoSortedLists() {
  //const [result,__ListNode]=useState();
  //const [result, __ListNode] = useState();
  // useEffect(() => 
  // {
  // //__ListNode({...mergeTwoLists(listNode1,listNode2)});
  // __ListNode(ListNodeUI(mergeTwoLists(listNode1,listNode2)));
  // }
  // ,[]
  // )

  return (
    <ul>
      Input: list1 = [1,2,4], list2 = [1,3,4] :<ListNodeUI {..._mergeTwoLists}/>
    </ul>
    
  );
}
export default MergeTwoSortedLists;

