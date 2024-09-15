// https://www.acmicpc.net/problem/5597

const presentStudentsNumber = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const attended = new Array(30).fill(false);

  
  presentStudentsNumber.forEach((number) => attended[number - 1] = true)
  const absentStudetnsNumber = []
  attended.forEach((attend, index) => {
    if (!attend) {
      absentStudetnsNumber.push(index + 1)
    }
  });

  if (absentStudetnsNumber[0] > absentStudetnsNumber[1]) {
    console.log(absentStudetnsNumber[1])
    console.log(absentStudetnsNumber[0])
  } else {
    console.log(absentStudetnsNumber[0])
    console.log(absentStudetnsNumber[1])
  }