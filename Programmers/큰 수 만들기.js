// Solution 1
// 효율 X, 런타임 오류
// 순열을 만들어서 풀려 했지만 효율성이 낮고 조건이 까다로워짐.
function solution1(number, k) {
  var answer = '';
  let max = Number.MIN_SAFE_INTEGER;
  const visited = Array(number.length).fill(false);
  function permutation(cnt, selectedNum, start) {
    if (cnt === number.length - k) {
      let newStr = '';
      selectedNum.map((s) => (newStr += s));
      let newMax = Number(newStr);
      if (max < newMax) {
        max = newMax;
      }
      return;
    }

    for (let i = start; i < number.length; i++) {
      if (visited[i]) {
        continue;
      }

      visited[i] = true;
      const newNum = [...selectedNum, number[i]];
      permutation(cnt + 1, newNum, i + 1);
      visited[i] = false;
    }
  }
  permutation(0, [], 0);
  answer = max.toString();
  return answer;
}

function solution2(number, k) {
  const stack = [];
  let answer = '';

  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    stack.push(el);
  }

  stack.splice(stack.length - k, k);
  answer = stack.join('');
  return answer;
}
