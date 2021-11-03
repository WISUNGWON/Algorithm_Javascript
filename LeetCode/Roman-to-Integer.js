let ROMAN_NUMERALS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let romanToint = function (s) {
  let symbols = s.split('');
  let res = 0;
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i] === 'I') {
      if (symbols[i + 1] === 'V') {
        res += 4;
        i += 2;
        continue;
      }

      if (symbols[i + 1] === 'X') {
        res += 9;
        i++;
        continue;
      }
    } else if (symbols[i] === 'X') {
      if (symbols[i + 1] === 'L') {
        res += 40;
        i++;
        continue;
      }

      if (symbols[i + 1] === 'C') {
        res += 90;
        i++;
        continue;
      }
    } else if (symbols[i] === 'C') {
      if (symbols[i + 1] === 'D') {
        res += 400;
        i++;
        continue;
      }

      if (symbols[i + 1] === 'M') {
        res += 900;
        i++;
        continue;
      }
    }

    res += ROMAN_NUMERALS[symbols[i]];
  }

  return res;
};

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt2 = function (s) {
  if (s.length === 1) return romanMap[s];

  let result = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const iValue = romanMap[s.charAt(i)];
    const i2Value = romanMap[s.charAt(i + 1)];

    if (iValue < i2Value) {
      result -= iValue; // -1 + 10, 10- 1
    } else {
      result += iValue;
    }
  }
  result += romanMap[s.charAt(s.length - 1)];
  return result;
};