let reverse = function (x) {
  if (x === 0) {
    return 0;
  }

  while (x / 10 === 0) {
    x = x / 10;
  }

  let s = x.toString();
  let sLen = s.length;

  const startIdx = s[0] === '-' ? 1 : 0;

  const n = sLen % 2 === 0 ? parseInt(sLen / 2) : parseInt(sLen / 2) + 1;

  let sArr = s.split('');
  for (let i = startIdx; i < n; i++) {
    let temp = sArr[i];
    sArr[i] = sArr[sLen - i];
    sArr[sLen - i] = temp;
  }

  const res = Number(sArr.join(''));
  return res >= Math.pow(-2, 31) && res <= Math.pow(2, 31) - 1 ? res : 0;
};
