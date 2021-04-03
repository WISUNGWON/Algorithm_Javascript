const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

let shuffle = function (nums, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i], nums[i + n]);
  }

  return arr;
};

console.log(shuffle(nums, n));
