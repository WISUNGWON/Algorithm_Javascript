// https://www.acmicpc.net/problem/10798

const input = require("fs").readFileSync("/dev/stdin", "utf-8").split("\n");

const solution = () => {
  const row = input.reduce((prev, curr) => {
    const curLen = curr.length;
    return curLen > prev ? curLen : prev;
  }, 0);
  const col = input.length;

  let answer = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const c = input[j]?.[i];
      if (c) {
        answer += c;
      }
    }
  }

  console.log(answer);
};

solution();