function solution(progresses, speeds) {
  var answer = [];
  let queue = [];
  for (let i = 0; i < speeds.length; i++) {
    queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let idx = 0;
  while (idx < queue.length) {
    let now = queue[idx];
    let op = queue[++idx];
    let cnt = 1;
    while (now >= op) {
      cnt++;
      op = queue[++idx];
    }
    answer.push(cnt);
  }
  return answer;
}
