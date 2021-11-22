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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
    const nodes = [];
    let deepest = -1;
    const recur = (node, depth) => {
        if (!node.left && !node.right) {
            if (depth > deepest) {
                deepest = depth;
            }
            nodes.push({ val: node.val, depth })
        }

        if (node.left) {
            recur(node.left, depth + 1);
        }

        if (node.right) {
            recur(node.right, depth + 1);
        }
    }

    recur(root, 1)
    return nodes.filter((node) => node.cnt === deepest).reduce((acc, cur) => acc + cur.val, 0)
}

// 풀이 아이디어
// 1. DFS로 트리를 순회하면서 각 노드의 자식이 없을 때 까지 카운트를 세고 노드를 저장한다.
// 2. 카운트를 세면서 deepest를 계산한다.
// 3. deepest에 해당하는 노드들만 val를 더해준다!
