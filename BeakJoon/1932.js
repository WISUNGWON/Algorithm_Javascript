
const [n, ...triangle] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
triangle.forEach((v, i, arr) => arr[i] = v.split(' ').map(vv => +vv));

const solve = (n, triangle) => {
  if (n === 1) return triangle[0][0];
  else if (n === 2) return triangle[0][0] + Math.max(...triangle[1]);
  for (let i=n-2; i>=0; i--) {
    triangle[i].forEach((v, idx, arr) => {
      arr[idx] = v + Math.max(triangle[i+1][idx], triangle[i+1][idx+1]);
    });
  }
  return triangle[0][0];
};

console.log(solve(+n, triangle));