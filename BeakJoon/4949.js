// https://www.acmicpc.net/problem/4949

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(".\n");

const newInput = input.slice(0, input.length - 1);
const gihos = ["(", ")", "[", "]"];
const beautifulComb = ["()", "[]"];
const solution = () => {
  newInput.forEach((sentence) => {
    const stack = [];
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      if (gihos.includes(char)) {
        const lastGiho = stack[stack.length - 1];
        if (!lastGiho) {
          stack.push(char);
          continue;
        }

        // console.log({ lastGiho, char });
        // console.log(stack);
        const comb = lastGiho + char;
        if (beautifulComb.includes(comb)) {
          stack.pop();
        } else {
          stack.push(char);
        }
      }
    }
    console.log(stack.length === 0 ? "yes" : "no");
  });
};

solution();