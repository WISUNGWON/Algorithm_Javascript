let isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let len = x.toString().length;

  let b = x;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (
      Math.floor((x % Math.pow(10, i + 1)) / Math.pow(10, i)) !==
      Math.floor(b / Math.pow(10, len - 1 - i))
    ) {
      return false;
    }

    b = b % Math.pow(10, len - 1 - i);
  }

  return true;
};
