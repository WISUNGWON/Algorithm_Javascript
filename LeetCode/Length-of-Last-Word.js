// Solution 1
// 80 ms, 38.3 MB
let lengthOfLastWord = function (s) {
  let arr = s.split(' ');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length > 0) {
      return arr[i].length;
    }
  }

  return 0;
};

// Solution 2
// 80 ms, 38.5 MB
let lengthOfLastWord2 = function (s) {
  let cnt = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      let j = i;
      while (s[j] !== ' ' && j >= 0) {
        cnt++;
        j--;
      }
      return cnt;
    }
  }

  return 0;
};

// Solution 3

/* 
72 ms, 38.5 MB
Runtime: 72 ms, faster than 91.61% of JavaScript online submissions for Length of Last Word.
Memory Usage: 38.5 MB, less than 59.34% of JavaScript online submissions for Length of Last Word.
*/
let lengthOfLastWord3 = function (s) {
  let cnt = 0;
  let isLast = false;

  if (s.length === 0) {
    return cnt;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      cnt++;
      isLast = true;
    } else {
      if (isLast) {
        break;
      }
    }
  }

  return cnt;
};
