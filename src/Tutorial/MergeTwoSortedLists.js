import React from 'react';
import { ListNodeUI,createListNode,mergeTwoListNode} from 'Component/RenderListNode';

function MergeTwoSortedLists() {
  const listNode1 = new createListNode(1, new createListNode(2, new createListNode(4)));//124 
  const listNode2 = new createListNode(1, new createListNode(3, new createListNode(4)));//134
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
  const _mergeTwoListNode=mergeTwoListNode(listNode1,listNode2);
  return (
    <ul>
      Input: list1 = [1,2,4], list2 = [1,3,4] :
      <ListNodeUI {..._mergeTwoListNode}/>
    </ul>
    
  );
}
export default MergeTwoSortedLists;

