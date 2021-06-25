// 프로그래머스 - 완주하지 못한선수
function solution(participant, completion) {
  var answer = '';
  let map = new Map();
  for (let i = 0; i < completion.length; i++) {
    let value = map.get(completion[i]);
    value ? map.set(completion[i], value + 1) : map.set(completion[i], 1);
  }

  for (let i = 0; i < participant.length; i++) {
    let person = participant[i];
    let value = map.get(participant[i]);
    if (value === 0 || value === undefined) {
      answer = person;
    } else {
      map.set(person, value - 1);
    }
  }

  return answer;
}

// 다른 사람 풀이
function solution2(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return 'nothing';
}
