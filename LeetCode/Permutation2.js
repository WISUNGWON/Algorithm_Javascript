/* 
    같은 것이 있는 순열 구하기.

    2가지를  체크해야 한다.

    1. 순열처럼 이미 뽑은 수를 다음 번 시행에서 다시 뽑을 수 없다 (visited)
    2. 같은 시행에서 중복된 문자를 고를 수 없는 케이스도 체크 해야 한다. (prev)
    why? : 순열에서 for문의 동작은 현재 자리에 들어가야하는 숫자를 고르는 것. 만약 중복된 문자를 고르지 않고 다음 시행(함수)로 보내면 같은 문자가 중복으로 나올 수 있게 됨.
    따라서 같은 것이 있는 순열에서는 2번과 같은 처리를 해주어야 함. 
*/

var permuteUnique = function (nums) {
  const result = [];
  const visited = Array(nums.length).fill(0);

  nums.sort();
  permutation(nums, result, [], visited);
  return result;
};

function permutation(nums, result, selectedNums, visited) {
  if (selectedNums.length === nums.length) {
    result.push([...selectedNums]);
    return;
  }
  let prev = -1;
  for (let i = 0; i < nums.length; ++i) {
    if (visited[i] || nums[i] === nums[prev]) {
      continue;
    }
    prev = i;
    visited[i] = 1;
    selectedNums.push(nums[i]);
    permutation(nums, result, selectedNums, visited);
    visited[i] = 0;
    selectedNums.pop();
  }
}
