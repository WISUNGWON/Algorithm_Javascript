function solution(clothes) {
  let answer = 1;
  let ob = {};
  for (let i = 0; i < clothes.length; i++) {
    ob[clothes[i][1]] = (ob[clothes[i][1]] || 1) + 1;
  }

  for (let key in ob) {
    answer *= ob[key];
  }

  return answer - 1;
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
