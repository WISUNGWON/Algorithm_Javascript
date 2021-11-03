// 프로그래머스 - 완주하지 못한선수
function solution(participant, completion) {
  var answer = '';
  const participantMap = new Map();

  completion.forEach((person) => {
    let personCnt = participantMap.get(person);
    participantMap.set(person, personCnt ? personCnt + 1 : 1);
  });

  for (let i = 0; i < participant.length; i++) {
    const person = participant[i];
    let personCnt = participantMap.get(person);
    if (personCnt === 0 || personCnt === undefined) {
      answer = person;
      break;
    } else {
      participantMap.set(person, personCnt - 1);
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
