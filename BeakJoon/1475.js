// https://www.acmicpc.net/problem/1475

const solution = () => {
  const input = require('fs').readFileSync('/dev/stdin').toString().trim()
  
  const map = new Map();
  for (let i = 0; i < input.length; i++) {
    const preNumber =  Number(input[i])
    const number = (preNumber === 6 || preNumber === 9) ? 9 : preNumber
    const value = map.get(number);
    
    if (value) {
      map.set(number, value + 1);
    } else {
      map.set(number, 1)
    }
  }

  let answer = 0
  for (const [key, value] of map) {
    const newValue = key === 9 ? Math.ceil(value / 2) : value;
    if (newValue > answer) {
      answer = newValue
    }
  }

  console.log(answer)
}

solution()