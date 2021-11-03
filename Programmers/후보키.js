function solution(relation) {
  var answer = 0;
  let check = new Array(relation[0].length).fill(0);
  let uniques = [];
  // step1 : 각 속성을 기준으로 부분집합 만들기
  let key = 0;
  const step2 = (arr) => {
    let len = arr[0].length;
    let strArr = [];
    for (let i = 0; i < len; i++) {
      let str = '';
      arr.map((v) => (str += v[i]));
      strArr.push(str);
    }
    for (let i = 0; i < len - 1; i++) {
      let curStr = strArr[i];
      for (let j = i + 1; j < len; j++) {
        if (curStr === strArr[j]) {
          return;
        }
      }
    }
    let newArr = [...arr, key++];
    uniques.push(newArr);
  };
  const step1 = (depth) => {
    if (depth === check.length) {
      // step2 만들어진 집합으로 unique한지 판단하기
      let arrO = [];
      check.forEach((v, index) => {
        let tempArr = [];
        if (v === 1) {
          for (let i = 0; i < relation.length; i++) {
            tempArr.push(relation[i][index]);
          }
          arrO.push(tempArr);
        }
      });
      if (arrO.length > 0) {
        step2(arrO);
      }
    } else {
      check[depth] = 1;
      step1(depth + 1);
      check[depth] = 0;
      step1(depth + 1);
    }
  };
  step1(0);
  //step3 최소성을 만족하는지 찾아보기
  uniques.sort((a, b) => a.length - b.length);
  let lastArr = [];
  for (let i = 0; i < uniques.length; i++) {}
  return answer;
}

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])
);
