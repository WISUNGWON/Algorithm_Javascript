const input = require('fs').readFileSync('./BeakJoon/1620.txt').toString().trim().split('\n');

const N = Number(input[0].split(' ')[0]);
const poketmons = input.slice(1, N + 1); // n번 까지 포켓몬
const questions = input.slice(N + 1); // n번 이후부터 문제

function isNumericString(str) {
  return /^[0-9]+$/.test(str);
}

const solution = () => {
  const poketmonsArr = poketmons.map((poketmon,index) => [poketmon, index + 1])
  const map = new Map(poketmonsArr) // 2차원 배열을 인자로 넣어주면 key, value의 map으로 생성
  questions.forEach(question => {
    if (isNumericString(question)) {
      console.log(poketmons[Number(question) - 1])
    } else {
      console.log(map.get(question))
    }
  }) 
}

solution()