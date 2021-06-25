/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let resultOne = [];
  let resultTwo = [];
  const dfs = (node, result) => {
    if (node === null) {
      result.push(-1);
      return;
    } else {
      result.push(node.val);
    }

    dfs(node.left, result);
    dfs(node.right, result);

    return;
  };

  dfs(p, resultOne);
  dfs(q, resultTwo);

  for (let i = 0; i < resultOne.length; i++) {
    if (resultOne[i] !== resultTwo[i]) {
      return false;
    }
  }

  return true;
};

function isSameTree2(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
