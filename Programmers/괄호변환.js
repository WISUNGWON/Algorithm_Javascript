function dfs(p) {
  if (p.length === 0) {
    return '';
  }

  const checkIsValidP = (parentheses) => {
    const stack = [];
    parentheses.split('').forEach((p) => {
      const value = stack[stack.length - 1];
      if (value === undefined || value === p) {
        stack.push(p);
      } else if (value + p === '()') {
        stack.pop();
      }
    });

    return stack.length === 0;
  };

  if (checkIsValidP(p)) {
    return p;
  }

  const separateP = (p) => {
    let leftCnt = 0;
    let rightCnt = 0;
    for (let i = 0; i < p.length; i++) {
      const char = p[i];
      char === '(' ? leftCnt++ : rightCnt++;
      if (leftCnt === rightCnt) {
        return [p.slice(0, i + 1), p.slice(i + 1, p.length)];
      }
    }
  };

  const [u, v] = separateP(p);
  if (checkIsValidP(u)) {
    return u + dfs(v);
  } else {
    let str = `(${dfs(v)})`;
    const slicedStr = u.slice(1, u.length - 1);
    for (let i = 0; i < slicedStr.length; i++) {
      str += slicedStr[i] === '(' ? ')' : '(';
    }
    return str;
  }
}

function solution(p) {
  return dfs(p);
}
