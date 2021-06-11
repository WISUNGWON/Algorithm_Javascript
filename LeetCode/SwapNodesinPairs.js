/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 링크드 리스트의 스왑 방법을 잘 알아야 한다.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let node1 = head,
    node2 = head.next,
    node3 = node2.next;

  node2.next = node1;
  node1.next = swapPairs(node3);
  return node2;
};

let nodes = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);

console.log(swapPairs(nodes));
