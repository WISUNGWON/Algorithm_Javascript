// arr에서 target의 인덱스를 O(1)로 찾기

const arr = [1, 2, 3, 4, 5, 6, 7];
const taget = 3;

const map = new Map();

arr.forEach((val, idx) => {
  map.set(val, idx);
});

console.log(map.get(3));
