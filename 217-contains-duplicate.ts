// function containsDuplicate(nums: number[]): boolean {
//WORKING SOLUTION
function containsDuplicate(nums) {
  let sorted = nums.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return true;
    }
  }
  return false;
}

var nums1 = [1, 2, 3, 1];
var nums2 = [1, 2, 3, 4];
var nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));

//MY BEST SOLUTION
// function containsDuplicate(nums) {
//     let result = false
//     nums.forEach(num => {
//         let first = nums.indexOf(num)
//             let second = nums.lastIndexOf(num)
//             if (first !== second){
//                 result = true
//             }
//     });

//     return result
// }

//SECOND SOLUTION
// function containsDuplicate(nums) {
//     let result = false
//     nums.forEach(num => {
//         let first = nums.indexOf(num)
//         let second = nums.indexOf(num,first+1)
//         if (second != -1){
//             result = true
//         }
//     });
//     return result
// }

//FIRST SOLUTION
// function containsDuplicate(nums) {
//     let result = false
//     for (let i = 0; i < nums.length; i++) {
//         let first = nums.indexOf(nums[i])
//         let second = nums.lastIndexOf(nums[i])
//         if (first !== second){
//             result = true
//         }
//     }
//     return result
// }
// ;
