function groupAnagrams(strs: string[]): string[][] {
  const answer = [];
  const checkIsAnagram = (a: string, b: string) => {
    return a.split('').sort().join('') === b.split('').sort().join('');
  };
  while (strs.length > 0) {
    const cur = strs[0];
    const curArr = [];
    strs = strs.filter((str) => {
      if (str.length === cur.length && checkIsAnagram(str, cur)) {
        curArr.push(str);
        return false;
      }
      return true;
    });
  }
  return answer;
}
