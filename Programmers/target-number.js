function mySolution(numbers, target) {
  var answer = 0;
  const getCalculatedNumber = (operatorArr) =>
    numbers.reduce((pre, cur, idx) =>
      operatorArr[idx] === "+" ? pre + cur : pre - cur
      , 0);
  const countWaysToMakeTarget = (arr, cnt) => {
    if (cnt === numbers.length) {
      if (getCalculatedNumber(arr) === target) answer++;
      return;
    }
    arr[cnt] = "+";
    countWaysToMakeTarget(arr, cnt + 1);
    arr[cnt] = "-";
    countWaysToMakeTarget(arr, cnt + 1);
  }

  let initOperatorArr = new Array(numbers.length).fill("+");
  countWaysToMakeTarget(initOperatorArr, 0)
  return answer;
}

// 다른사람 풀이.
// 연산자들을 따로 저장하지않고, 재귀를 탈 때 마다 sum을 합산하는 면에서 내 풀이보다 훨씬 효율적.
function goodSolution(numbers, target) {
  let answer = 0;
  function p(step, sum) {
    if (step === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    p(step + 1, sum + numbers[step]);
    p(step + 1, sum - numbers[step]);
  }

  p(0, 0);

  return answer;
}
