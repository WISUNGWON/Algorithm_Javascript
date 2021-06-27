/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 내 풀이 -> 인트 범위 초과
var addTwoNumbers = function (l1, l2) {
  let arrOne = makeArr(l1);
  let arrTwo = makeArr(l2);

  // 만들어진 arr에서 바로 뒤에서부터 100 씩 곱하면서 합 구할 수 있음.
  let sumOne = sumArr(arrOne); // 342
  let sumTwo = sumArr(arrTwo); // 465

  let sumNum = sumOne + sumTwo; // 807

  // 807
  let myFunc = (num) => Number(num);

  let arrSumNum = Array.from(String(sumNum), myFunc); // 8, 0, 7
  // 뒤에서 부터 new ListNode를 만든다?

  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  let head = new ListNode(arrSumNum[arrSumNum.length - 1], null);
  let now = head;
  for (let i = arrSumNum.length - 2; i >= 0; i--) {
    now.next = new ListNode(arrSumNum[i], null);
    now = now.next;
  }

  return head;
};

const makeArr = (node) => {
  let arr = [node.val];
  let head = node;
  while (head.next !== null) {
    arr.push(head.next.val);
    head = head.next;
  }

  return arr;
};

const sumArr = (arr) => {
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i] * Math.pow(10, i);
  }
  return sum;
};

var addTwoNumbers2 = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(2, new ListNode(4, new ListNode(3, null)));
let head2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

console.log(addTwoNumbers(head, head2));
