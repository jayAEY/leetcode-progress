var merge = function (nums1, m, nums2, n) {
  return nums2;
};

let one = { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 };
let two = { nums1: [1], m: 1, nums2: [], n: 0 };
let three = { nums1: [0], m: 0, nums2: [1], n: 1 };

console.log(merge(one.nums1, one.m, one.nums2, one.n));
console.log(merge(two.nums1, two.m, two.nums2, two.n));
console.log(merge(three.nums1, three.m, three.nums2, three.n));
