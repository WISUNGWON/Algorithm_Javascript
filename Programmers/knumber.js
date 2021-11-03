function solution(array, commands) {
  var answer = [];
  commands.forEach((val) => {
    let left = val[0] - 1;
    let right = val[1];
    const slicedArr = array.slice(left, right).sort((a, b) => a - b);
    answer.push(slicedArr[val[2] - 1]);
  });
  return answer;
}

// Sort() 함수 주의사항 (feat. MDN)
/* 
    compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다. 
    예를 들어 "바나나"는 "체리"앞에옵니다. 숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.
*/
