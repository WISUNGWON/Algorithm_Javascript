let searchInsert = function (nums, target) {
  let ans = nums.length;
  let flag = false;

  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      ans = i;
      break;
    }

    if (target < nums[i] && !flag) {
      flag = true;
      if (i === 0) {
        ans = 0;
      } else {
        ans = i;
      }
    }
  }

  return ans;
};

let searchInsert2 = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  return nums.length;
};
