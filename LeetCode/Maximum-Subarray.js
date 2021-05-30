let maxSum = Number.MIN_VALUE;
let addNum = 1;

let func = function (nums) {
  if (addNum === nums.length + 1) {
    return;
  }
  let i = 0;
  let sum = 0;
  while (i + addNum < nums.length) {
    for (let j = i; j <= addNum; j++) {
      sum += nums[j];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }

    i++;
  }

  addNum += 1;
  func(nums);
};

func([5, 4, -1, 7, 8]);

console.log(maxSum);
