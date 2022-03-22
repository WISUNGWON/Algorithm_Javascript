function solution(relation) {
  var answer = [];
  // 1. 컬럼의 조합만들기
  const columnLen = relation[0].length;
  let visited = new Array(columnLen).fill(false);
  const keys = [];
  const comb = (cnt) => {
    if (cnt === columnLen) {
      // 2. 후보키 판단 후 배열에 넣기
      const res = visited.map((val, index) => {
        if (val) return index
      }).filter((val) => val !== undefined)
      // res : [1 , 2, ...]
      let joinedTable = [];
      relation.forEach((tuple) => {
        let joinedRow = "";
        res.forEach((idx) => {
          joinedRow += tuple[idx];
        })
        joinedTable.push(joinedRow);
      })
      // joinedTable안에 중복이 있는 지판단 
      const set = new Set(joinedTable)
      // 중복이 없으면 res를 keys(후보키들)에 넣기
      if (set.size === relation.length) {
        keys.push(res)
      }
      return;
    }
    visited[cnt] = true;
    comb(cnt + 1);
    visited[cnt] = false;
    comb(cnt + 1);
  }
  // 3. 후보키 배열에서 최소성 판단 후 최종 값 구하기.
  comb(0)
  console.log(keys, " : before")
  keys.sort((a, b) => a.length - b.length)
  console.log(keys)
  // 0번째는 유일한 애임.
  // 따라서 판단하는 배열이 최종적으로 size가 0일 때 최소성 판단 종료
  let [key, ...restKeys] = keys;
  answer.push(key);
  key.sort((a, b) => a - b);
  let joinedKey = key.join("");
  let temp = restKeys.filter((val) => !val.sort((a, b) => a - b).join("").includes(joinedKey))
  while (temp.length > 0) {
    let [key, ...restKeys] = temp;
    answer.push(key);
    key.sort((a, b) => a - b);
    let joinedKey = key.join("");
    temp = restKeys.filter((val) => !val.sort((a, b) => a - b).join("").includes(joinedKey))
  }

  return answer.length;
}

/*
  컬럼의 조합에 따라 유일성은 무조건 만족하지만 (keys) keys의 key가 최소성을 만족하는지는 확인해봐야 함.
  02 -> 023 (ok), 012 (no)
*/