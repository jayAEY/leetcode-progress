// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
function mergeTwoLists(list1, list2) {
  let one = Array.from(list1);
  let two = Array.from(list2);
  return one.concat(two).sort();
  // return list1.concat(list2).sort();
}

let first = { list1: [1, 2, 4], list2: [1, 3, 4] };
let second = { list1: [], list2: [] };
let third = { list1: [], list2: [0] };

console.log(mergeTwoLists(first.list1, first.list2));
console.log(mergeTwoLists(second.list1, second.list2));
console.log(mergeTwoLists(third.list1, third.list2));

// node 21-merge-two-sorted-lists.ts
