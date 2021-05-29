// careful to convert string to integer.
// Number() only convert in 64bit number.
// BigInt can handle more than 64bit number.

// Solution 1. 88 ms	41.2 MB
let addBinary = function (a, b) {
  let num = BigInt(a) + BigInt(b);
  let str = num.toString();

  let res = '';
  let carryNum = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '2') {
      if (carryNum === 1) {
        res = '1' + res;
      } else {
        res = '0' + res;
        carryNum = 1;
      }
    }

    if (str[i] === '1') {
      if (carryNum === 1) {
        res = '0' + res;
      } else {
        res = '1' + res;
      }
    }

    if (str[i] === '0') {
      if (carryNum === 1) {
        res = '1' + res;
        carryNum = 0;
      } else {
        res = '0' + res;
      }
    }
  }

  if (carryNum === 1) {
    res = '1' + res;
  }

  return res;
};

// Solution 2. 100 ms	39.7 MB
let addBinary2 = function (a, b) {
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += a[i--] - '0';
    }
    if (j >= 0) {
      sum += b[j--] - '0';
    }
    result = (sum % 2) + result;
    carry = parseInt(sum / 2);
  }
  if (carry > 0) {
    result = 1 + result;
  }
  return result;
};

console.log(
  addBinary(
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
  )
);
