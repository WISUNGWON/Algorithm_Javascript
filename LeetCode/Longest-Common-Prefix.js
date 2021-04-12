let longestCommonPrefix = function (strs) {
  if (strs === undefined) {
    return '';
  }
  const newStrs = strs.filter((s) => s !== undefined);
  let minLen = Number.MAX_SAFE_INTEGER;
  let minLenIdx = 0;
  for (let i = 1; i < newStrs.length; i++) {
    if (newStrs[i].length < minLen) {
      minLen = newStrs[i].length;
      minLenIdx = i;
      break;
    }
  }
  let flag = true;
  let res = [];
  let now = '';
  loop1: for (let i = 0; i < minLen; i++) {
    let ch = newStrs[minLenIdx].slice(i, i + 1);
    for (let j = 0; j < newStrs.length; j++) {
      if (newStrs[j].slice(i, i + 1) !== ch) {
        flag = false;
        break loop1;
      }
      now = newStrs[j].slice(i, i + 1);
    }
    res.push(now);
  }

  if (res) {
    return res.join('');
  }

  return '';
};
