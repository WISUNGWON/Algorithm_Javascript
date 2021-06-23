//내 초기 코드 (BFS)

function solution(begin, target, words) {
  var answer = 0;
  let queue = [];
  let visited = Array(words.length).fill(false);
  function bfs(word, count) {
    let start = word;
    queue.push(start);
    while (queue.length > 0) {
      let nowWord = queue.shift();
      for (let i = 0; i < words.length; i++) {
        let diffWord = words[i];
        if (visited[i]) {
          continue;
        } else {
          let countNum = 0;
          for (let j = 0; j < nowWord.length; j++) {
            if (nowWord[j] !== diffWord[j]) {
              countNum++;
            }
          }
          if (countNum === 1) {
            if (diffWord === target) {
              return count + 1;
            } else {
              queue.push(diffWord);
              visited[i] = true;
            }
          }
        }
      }
      count++;
    }
    return 0;
  }

  answer = bfs(begin, 0);
  return answer;
}

// 깔끔한 다른 분 풀이 (BFS)
// visited를 Object으로 표현한 것과 고차함수를 잘 사용한게 인상깊음.

function solution2(begin, target, words) {
  const visited = {};
  bfs(begin);
  return visited[target] === undefined ? 0 : visited[target];

  function bfs(node) {
    visited[node] = 0;
    const q = [node];

    while (q.length !== 0) {
      const currentNode = q.shift();
      words
        .filter((word) => canChangeWord(word, currentNode))
        .forEach((movableNode) => {
          if (visited[movableNode] === undefined) {
            visited[movableNode] = visited[currentNode] + 1;
            q.push(movableNode);
          }
        });
    }
  }
}

function canChangeWord(wordOne, wordTwo) {
  let count = 0;
  for (let i = 0; i < wordOne.length; i++) {
    if (wordOne[i] !== wordTwo[i]) count++;
  }

  return count === 1 ? true : false;
}
