const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = () => {
  let answer = 0;
  let sticks = [];
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "(") {
      const nextChar = input[i + 1];
      // isLaser
      if (char + nextChar === "()") {
        if (sticks.length === 0) {
          continue;
        } else {
          answer += sticks.length;
        }
        i++;
      } else {
        // new Stick
        answer++    
        sticks.push({
          lCount: 0,
        });
      }
    } else if (char === ")") {
      sticks.pop();
    }
  }

  console.log(answer);
};

solution();