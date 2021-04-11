let tmp = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let romanToint = function (s) {
  let strArr = s.split('');
  let res = 0;
  let i;
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'I') {
      if (strArr[i + 1] === 'V') {
        res += 4;
        i += 2;
        continue;
      }

      if (strArr[i + 1] === 'X') {
        res += 9;
        i++;
        continue;
      }
    } else if (strArr[i] === 'X') {
      if (strArr[i + 1] === 'L') {
        res += 40;
        i++;
        continue;
      }

      if (strArr[i + 1] === 'C') {
        res += 90;
        i++;
        continue;
      }
    } else if (strArr[i] === 'C') {
      if (strArr[i + 1] === 'D') {
        res += 400;
        i++;
        continue;
      }

      if (strArr[i + 1] === 'M') {
        res += 900;
        i++;
        continue;
      }
    }

    res += tmp[strArr[i]];
  }

  return res;
};
