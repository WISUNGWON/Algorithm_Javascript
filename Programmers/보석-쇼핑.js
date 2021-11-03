function solution(gems) {
  var answer = [];
  let map = new Map();
  for (let i = 0; i < gems.length; i++) {
    map.set(gems[i], 1);
  }

  let len = map.size;
  for (let i = len; i <= gems.length; i++) {
    for (let j = 0; j <= gems.length - len; j++) {
      for (let z = j; z < i + j; z++) {
        // check map
        let v = map.get(gems[z]);
        // 방문처리
        if (v) {
          map.set(gems[z], 0);
        }
      }
      // 모두 방문처리 되었는지 확인
      let flag = true;
      for (let v of map.values()) {
        if (v === 1) {
          flag = false;
          break;
        }
      }
      if (flag) {
        // 시작 진열대 번호와 끝 진열대 번호를 배열에 담아서 리턴
        return [j + 1, j + i];
      } else {
        // 방문 처리를 위해 다시 맵 초기화
        for (let v of map.keys()) {
          map.set(v, 1);
        }
      }
    }
  }
  return answer;
}

console.log(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB']));
