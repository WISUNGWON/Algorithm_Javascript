let plusOne = function (digits) {
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

// Comment : 최대한 내장 함수 사용하지 않고 구현하기!
let arr = [0];
