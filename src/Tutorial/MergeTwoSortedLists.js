import React from 'react';
import { ListNodeUI,createListNode} from 'Component/RenderListNode';

const listNode1 = new createListNode(1, new createListNode(2, new createListNode(4)));//124 
const listNode2 = new createListNode(1, new createListNode(3, new createListNode(4)));//134
//console.log('%c mergeTwoLists', 'background: blue; color: white',listNode1,listNode2);
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  console.log('%c mergeTwoLists', 'background: blue; color: yellow',l1.val,l2.val);
  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};

let _mergeTwoLists=mergeTwoLists(listNode1,listNode2);

//console.log('%c mergeTwoLists()', 'background: blue; color: white',mergeTwoLists(listNode1,listNode2));
function MergeTwoSortedLists() {
  return (
    <ul>
      Input: list1 = [1,2,4], list2 = [1,3,4] :<ListNodeUI {..._mergeTwoLists}/>
    </ul>
    
  );
}
export default MergeTwoSortedLists;

