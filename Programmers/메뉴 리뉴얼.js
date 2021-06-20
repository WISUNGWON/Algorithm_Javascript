function solution(orders, course) {
  let answer = [];

  let [nowC, nowO, visited] = [0, '', []];
  let map;
  // 조합 하는 함수
  function p(step, num) {
    if (step === nowC) {
      let res = visited
        .map((v, index) => {
          if (v) {
            return nowO[index];
          }
        })
        .sort()
        .join('');
      // 만들어진 res를 오름차순 한 뒤
      // hashMap에 key와 value비교해서 저장
      let val = map.get(res);
      val ? map.set(res, val + 1) : map.set(res, 1);
      return;
    }

    for (let i = num; i < nowO.length; i++) {
      if (visited[i]) {
        continue;
      }

      visited[i] = true;
      p(step + 1, i + 1);
      visited[i] = false;
    }
  }

  for (let i = 0; i < course.length; i++) {
    // 해시맵 리셋
    map = new Map();
    nowC = course[i];
    for (let j = 0; j < orders.length; j++) {
      nowO = orders[j];
      // visited
      visited = Array(nowO.length).fill(false);
      p(0, 0);
    }

    // 해시맵 확인해서 answer에 push
    let sortedMapArr = [...map.entries()].sort((a, b) => b[1] - a[1]);
    let i = 0;
    while (sortedMapArr && i < sortedMapArr.length) {
      if (sortedMapArr[0][1] === sortedMapArr[i][1] && sortedMapArr[i][1] > 1) {
        answer.push(sortedMapArr[i][0]);
      } else {
        break;
      }
      i++;
    }
  }

  // answer 오름차순 정렬 후에 출력
  answer.sort();
  return answer;
}

console.log(solution(['ABCFG', 'AC'], [2, 3, 4]));
