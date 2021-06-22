function solution(name) {
  var answer = 0;

  for (let i = 0; i < name.length; i++) {
    let nowA = name.charCodeAt(i);
    if (nowA - 65 <= 13) {
      answer += nowA - 65;
    } else {
      answer += 26 - (nowA - 65);
    }
  }

  // -> 시행
  let max1 = 0;
  for (let j = 0; j < name.length; j++) {
    if (name[j] !== 'A') {
      max1 = j;
    }
  }

  // <- 시행
  let max2 = 0;

  for (let z = name.length - 1; z > 0; z--) {
    if (name[z] !== 'A') {
      max2 = z;
    }
  }

  max2 = name.length - max2;

  answer += Math.min(max1, max2);
  return answer;
}

console.log(solution('ABAAAAAAAAABB'));
