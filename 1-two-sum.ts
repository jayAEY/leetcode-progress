// function twoSum(nums: number[], target: number): number[] {
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

const one = { nums: [2, 7, 11, 15], target: 9 };
const two = { nums: [3, 2, 4], target: 6 };
const three = { nums: [3, 3], target: 6 };
const four = { nums: [2, 5, 5, 11], target: 10 };

console.log(twoSum(one.nums, one.target));
console.log(twoSum(two.nums, two.target));
console.log(twoSum(three.nums, three.target));
console.log(twoSum(four.nums, four.target));

// node 1-two-sum.ts
