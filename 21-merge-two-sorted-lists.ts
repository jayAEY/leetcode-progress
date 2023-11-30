// class Node {
//   constructor(value, next) {
//     this.value = value;
//     this.next = next ? next : null;
//   }
// }

// const initializeLinkedListFromArray = (array) => {
//   if (array.length === 0) {
//     return [];
//   }
//   let head = new Node(array[0]);
//   let current = head;
//   for (let i = 0; i < array.length; i++) {
//     let newNode = new Node(array[i]);
//     current.next = newNode;
//     current = current.next;
//   }
//   return head;
// };

// const printLinkedList = (head) => {
//   let current = head;
//   let printStr = "";
//   while (current) {
//     printStr += current.value + "->";
//     current = current.next;
//   }
//   console.log(printStr);
// };

// const head = initializeLinkedListFromArray([1, 2, 3]);
// printLinkedList(head);

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(0);
  let previous = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      previous.next = list1;
      previous = list1;
      list1 = list1.next;
    } else {
      previous.next = list2;
      previous = list2;
      list2 = list2.next;
    }
  }

  if (!list1) previous.next = list2;
  if (!list2) previous.next = list1;

  return dummy.next;
}

let first = { list1: [1, 2, 4], list2: [1, 3, 4] };
let second = { list1: [], list2: [] };
let third = { list1: [], list2: [0] };

console.log(mergeTwoLists(first.list1, first.list2));
console.log(mergeTwoLists(second.list1, second.list2));
console.log(mergeTwoLists(third.list1, third.list2));

// node 21-merge-two-sorted-lists.ts
