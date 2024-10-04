const input = require('fs').readFileSync('./BeakJoon/1260.txt').toString().trim().split('\n')

// 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 
// 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.
const [N, M, V] = input[0].split(' ');

const graph = {};

for (let i = 1; i < input.length; i++) {
  const nodes = input[i].split(' ');
  const numNode1 = Number(nodes[1])
  const numNode2 = Number(nodes[0])
  graph[nodes[0]] = graph[nodes[0]] ? [...graph[nodes[0]], numNode1] : [numNode1];
  graph[nodes[1]] = graph[nodes[1]] ?  [...graph[nodes[1]], numNode2]: [numNode2];
}

Object.keys(graph).forEach((key) => {
  const value = graph[key];
  value.sort((a, b) => a - b);
})

const visited = Array(Number(N) + 1).fill(false);
const dfsArr = [];

const dfs = (node) => {
  if (visited[node]) {
    return;
  }

  visited[node] = true;
  dfsArr.push(node);
  const nodes = graph[node];
  for (let i = 0; i < nodes?.length; i++) {
    dfs(nodes[i])
  }
}

dfs(Number(V))

console.log(dfsArr.join(' '))

for (let i = 0; i < visited.length; i++) {
  visited[i] = false;
}


const bfsArr = [];
const bfs = () => {
  const queue = [];
  queue.push(Number(V));
  while (queue.length > 0) {
    const node = queue.shift();
    if (visited[node]) {
      continue;
    }
    bfsArr.push(node);
    visited[node] = true;
    const nodes = graph[node];
    queue.push(...(nodes || []))
  }
}

bfs();

console.log(bfsArr.join(' '));

