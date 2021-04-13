let longestCommonPrefix = function (strs) {
  let res = '';

  if (strs.length === 0) {
    return res;
  }

  let word = strs[0];
  let Idx = 0;
  for (ch of word) {
    for (let i = 1; i < strs.length; i++) {
      let conWord = strs[i];
      if (ch !== conWord[Idx]) {
        return res;
      }
    }
    res += ch;
    Idx++;
  }

  return res;
};
