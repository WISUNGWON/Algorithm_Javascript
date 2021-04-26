let removeDuplicates = function (nums) {
  let compareIdx = 1;
  let len = nums.length;
  for (let checkIdx = 0; checkIdx < nums.length; checkIdx++) {
    while (nums[checkIdx] === nums[compareIdx]) {
      len--;
      nums.splice(compareIdx, 1);
    }

    compareIdx++;
  }

  // 다음 요소가 있는지 확인
  return len;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
