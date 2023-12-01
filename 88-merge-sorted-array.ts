var merge = function (nums1, m, nums2, n) {
  n > 0 && nums1.splice(-n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

let one = { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 };
let two = { nums1: [1], m: 1, nums2: [], n: 0 };
let three = { nums1: [0], m: 0, nums2: [1], n: 1 };
let four = {
  nums1: [-1, 0, 0, 3, 3, 3, 0, 0, 0],
  m: 6,
  nums2: [1, 2, 2],
  n: 3,
};
// expected output for four [-1,0,0,1,2,2,3,3,3]

console.log(merge(one.nums1, one.m, one.nums2, one.n));
console.log(merge(two.nums1, two.m, two.nums2, two.n));
console.log(merge(three.nums1, three.m, three.nums2, three.n));
console.log(merge(four.nums1, four.m, four.nums2, four.n));

// node 88-merge-sorted-array.ts
