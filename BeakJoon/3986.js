const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const beauti = ["AA", "BB"];

const solution = () => {
  let count = 0;
  input.forEach((word) => {
    const stack = [];
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const lastChar = stack[stack.length - 1];
      if (!lastChar) {
        stack.push(char);
        continue;
      }

      const comb = lastChar + char;
      if (beauti.includes(comb)) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    if (stack.length === 0) {
      count++;
    }
  });

  console.log(count);
};

solution();