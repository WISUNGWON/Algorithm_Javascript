function solution(numbers, hand) {
  let answer = '';

  const position = [
    [4, 2],
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
    [4, 1],
    [4, 3],
  ];
  let nowL = 10;
  let nowR = 11;
  for (let i = 0; i < numbers.length; i++) {
    let nowNum = numbers[i];
    if (nowNum === 1 || nowNum === 4 || nowNum === 7) {
      nowL = nowNum;
      answer += 'L';
    } else if (nowNum === 3 || nowNum === 6 || nowNum === 9) {
      nowR = nowNum;
      answer += 'R';
    } else {
      let curL =
        Math.abs(position[nowNum][0] - position[nowL][0]) +
        Math.abs(position[nowNum][1] - position[nowL][1]);
      let curR =
        Math.abs(position[nowNum][0] - position[nowR][0]) +
        Math.abs(position[nowNum][1] - position[nowR][1]);

      if (curL < curR) {
        nowL = nowNum;
        answer += 'L';
      } else if (curL > curR) {
        nowR = nowNum;
        answer += 'R';
      } else {
        if (hand === 'right') {
          nowR = nowNum;
          answer += 'R';
        } else if (hand === 'left') {
          nowL = nowNum;
          answer += 'L';
        }
      }
    }
  }
  return answer;
}
