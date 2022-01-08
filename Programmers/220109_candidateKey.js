// 프로그래머스 : 후보키

function solution(relation) {
  var answer = [];
  const lenOfCol = relation[0].length;
  let visited = new Array(lenOfCol).fill(false);
  let colSubset = [];
  let keys = [];
  // 1. 컬럼의 조합 구하기
  const subset = (cnt) => {
    if (cnt === lenOfCol) {
      const joinedTable = relation.reduce((prev, tuple) => [...prev, tuple.filter((_, index) => colSubset.includes(index)).join("")], [])
      const set = new Set(joinedTable)
      if (set.size === relation.length) {
        keys.push([...colSubset])
      }
      return;
    }
    visited[cnt] = true;
    colSubset.push(cnt)
    subset(cnt + 1);
    visited[cnt] = false;
    colSubset.pop();
    subset(cnt + 1);
  }
  // 3. 후보키 후보키 배열에서 최소성 판단 후 최종 값 구하기.
  subset(0);
  keys.sort((a, b) => a.length - b.length);
  const filterKeys = (keyArr) => {
    let [key, ...rest] = keyArr;
    answer.push(key);
    return rest.filter((arr) => !key.every((val) => arr.includes(val)))
  };
  let filteredKeys = filterKeys(keys);
  while (filteredKeys.length > 0) {
    filteredKeys = filterKeys(filteredKeys)
  }

  return answer.length;
}