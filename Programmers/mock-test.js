// 프로그래머스 모의고사
function solution(answers) {
  var answer = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const oneCnt = [checkNums(answers, one, 5), 1];
  const twoCnt = [checkNums(answers, two, 8), 2];
  const threeCnt = [checkNums(answers, three, 10), 3];

  const arr = [oneCnt, twoCnt, threeCnt];
  arr.sort((a, b) => {
    return b[0] - a[0];
  });

  let max = arr[0][0];
  let ansArr = arr.filter((v) => v[0] === max);
  answer = ansArr.map((v) => v[1]);
  answer.sort();

  return answer;
}

const checkNums = (answer, nums, end) => {
  let cnt = 0;
  for (let i = 0, j = 0; i < answer.length; i++, j++) {
    j = j % end;
    if (answer[i] === nums[j]) {
      cnt++;
    }
  }

  return cnt;
};

// console.log(solution([1, 3, 2, 4, 2]));
// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([4, 4, 4, 5, 1]));
// console.log(solution([1]));
// console.log(solution([1, 2]));
console.log(solution([3, 3]));
