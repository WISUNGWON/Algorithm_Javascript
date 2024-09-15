// https://www.acmicpc.net/problem/1110

const solution1110 = () => {
  const input = require('fs').readFileSync('/dev/stdin').toString().trim();

  const recurse = (count, result) => {
    if (result === Number(input) && count > 0) {
      return count;
    }

    if (result < 10) {
      const res = result * 10 + result
      return recurse(count + 1, res)
    } else {
      const one = (Math.floor(result / 10)) + (result % 10)
      const two = `${(result % 10)}${(one % 10 )}`
      return recurse(count + 1, Number(two))
    }
  }
  
  console.log(recurse(0, Number(input)))
}

solution1110()