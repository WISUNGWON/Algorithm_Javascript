let strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

  let i = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[0]) {
      let flag = false;
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          flag = true;
          break;
        }
      }

      if (!flag) {
        return i;
      }
    }

    i++;
  }

  return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
console.log(strStr('aaa', 'aaaa'));
