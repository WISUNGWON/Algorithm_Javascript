nums = [3, 3];
target = 6;

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (a + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
