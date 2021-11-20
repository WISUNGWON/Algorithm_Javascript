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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    const queue = [];
    let answer = 0;
    queue.push(root);
    while (queue.length) {
        const node = queue.shift();
        if (low <= node.val && high >= node.val) {
            answer += node.val;
        }
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return answer
};