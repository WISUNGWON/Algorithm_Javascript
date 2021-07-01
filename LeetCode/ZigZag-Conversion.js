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

// 다른 사람 깔끔한 풀이
var convert2 = function (s, numRows) {
  // return original string if can't zigzag
  if (numRows === 1 || s.length < numRows) return s;

  let rows = [];
  let converted = '';
  let reverse = false;
  let count = 0;

  // prepare rows
  for (let i = 0; i < numRows; i++) rows[i] = [];
  // reverse the push flow when reaching turning points
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) reverse = !reverse;
  }
  // put together converted string
  return rows.reduce((converted, cur) => converted + cur.join(''), '');
};

console.log(convert('AB', 1));
