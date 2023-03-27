import React from 'react';

import { ListNodeUI,createListNode,mergeTwoListNode} from 'Component/RenderListNode';
// const list1 = {val: 1, next: {val: 4, next: {val: 5, next: null}}};
// const list2 = {val: 1, next: {val: 3, next: {val: 4, next: null}}};
// const list3 = {val: 2, next: {val: 6, next: null}};
// const lists = [list1, list2, list3];
var mergeKLists = function (lists) {
    console.log('%c mergeKLists', 'background: blue; color: yellow',lists);

    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
  
    const mid = Math.floor(lists.length / 2);
    const left = mergeKLists(lists.slice(0, mid));
    const right = mergeKLists(lists.slice(mid));
  
    return mergeTwoListNode(left, right);
  }
  





//const _mergeKLists=mergeKLists([[1,4,5],[1,3,4],[2,6]]);

function MergeKSortedLists() {
const listNodes = [new createListNode(1, new createListNode(4, new createListNode(5)))
    ,new createListNode(1, new createListNode(3, new createListNode(4)))
    ,new createListNode(2, new createListNode(6))
];//134

const _mergeKLists=mergeKLists(listNodes);
  return (
    <ul>
      Input: [[1,4,5],[1,3,4],[2,6]] : <ListNodeUI {..._mergeKLists}/>
    </ul>
    
  );
}
export default MergeKSortedLists;

