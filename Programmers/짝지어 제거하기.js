function solution(s) {
  if (s.length % 2 != 0) return 0;

  const arrStr = [...s];
  const stack = [];

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(arrStr[i]);
      if (arrStr.length - i < stack.length) return 0;
    }
  }

  return 1;
}
