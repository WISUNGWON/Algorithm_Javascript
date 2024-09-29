import fs from 'fs'

const input = fs.readFileSync('./BeakJoon/1003.txt').toString().trim().split('\n');

const solution = (input) => {
  let zeroCount = 0;
  let oneCount = 0;
  const dp = [0, 1];
  const fibo = (number) => {
    if (typeof dp[number] !== "undefined") {
      return dp[number];
    }

    if (number === 0) {
      zeroCount++;
    }

    if (number === 1) {
      oneCount++;
    }

    dp[number] = fibo(number - 1) + fibo(number - 2)

    return dp[number];
  }

  fibo(input)
  console.log(zeroCount, oneCount)
}

for (let i = 1; i < input.length; i++) {
  solution(Number(input[i]))
}