/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  if (numRows === 2) {
    let str = '';
    for (let i = 0; i < s.length; i += 2) {
      str += s[i];
    }

    for (let j = 1; j < s.length; j += 2) {
      str += s[j];
    }

    return str;
  }

  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  let isJic = true;
  let isDea = false;
  let row = 0;
  let i = 0;
  while (i < s.length) {
    if (isJic) {
      arr[row].push(s[i]);
      row += 1;
      if (row === numRows) {
        isJic = false;
        row = numRows - 2;
      }
    }
    if (isDea) {
      arr[row].push(s[i]);

      row -= 1;
      if (row === 0) {
        isDea = false;
        isJic = true;
      }
    }

    if (isJic === false) {
      isDea = true;
    }

    i++;
  }

  let answer = '';
  arr.forEach((v) => v.forEach((v2) => (answer += v2)));
  return answer;
};

console.log(convert('AB', 1));
