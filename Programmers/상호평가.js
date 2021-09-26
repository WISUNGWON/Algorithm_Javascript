function solution(scores) {
  var answer = '';

  const giveACredit = (average) => {
    if (average >= 90) {
      return 'A';
    } else if (average >= 80) {
      return 'B';
    } else if (average >= 70) {
      return 'C';
    } else if (average >= 50) {
      return 'D';
    } else {
      return 'F';
    }
  };

  const checkMyScoreIsUniqueTopOrBottom = (score, scoreArr) => {
    if (score === scoreArr[scoreArr.length - 1]) {
      if (score !== scoreArr[scoreArr.length - 2]) {
        return true;
      }
    } else if (score === scoreArr[0]) {
      if (score !== scoreArr[1]) {
        return true;
      }
    }
    return false;
  };

  scores.forEach((_, index) => {
    const realScoreArr = scores.map((scoreArr) => scoreArr[index]);
    const myScore = realScoreArr[index];
    realScoreArr.sort((a, b) => a - b);
    let scoreSum = realScoreArr.reduce((a, b) => a + b);
    let divideNum = realScoreArr.length;

    if (checkMyScoreIsUniqueTopOrBottom(myScore, realScoreArr)) {
      scoreSum -= myScore;
      divideNum--;
    }

    const average = Math.floor(scoreSum / divideNum);
    const credit = giveACredit(average);
    answer += credit;
  });

  return answer;
}
