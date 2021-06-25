/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// BFS solution.
const pushNode = (node, arr, q) => {
  if (node === null) {
    arr.push(-1);
  } else {
    q.push(node);
    arr.push(node.val);
  }
};

const checkSymmetric = (arr) => {
  let half = arr.length / 2;
  let j = 0;
  for (let i = half - 1; i >= 0; i--) {
    if (arr[i] !== arr[half + j]) {
      return false;
    }
    j++;
  }

  return true;
};
var isSymmetric = function (root) {
  let q = [];
  q = [root];

  while (q.length > 0) {
    let verifyArr = [];
    let len = q.length;
    while (len-- > 0) {
      let curNode = q.shift();

      pushNode(curNode.left, verifyArr, q);
      pushNode(curNode.right, verifyArr, q);
    }
    // check queue is symmetric
    // should check in paze
    if (!checkSymmetric(verifyArr)) {
      return false;
    }
  }

  return true;
};

// Good Solution from user

let isSymmetric2 = function (root) {
  if (root === null) {
    return true;
  }

  return symmetryChecker(root.left, root.right);
};

const symmetryChecker = (left, right) => {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.val !== right.val) return false;

  return (
    symmetryChecker(left.left, righr.right) &&
    symmetryChecker(left.right, right.left)
  );
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3, null, null)),
  new TreeNode(2, null, new TreeNode(3, null, null))
);

let root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)),
  new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null))
);

console.log(isSymmetric(root2));
