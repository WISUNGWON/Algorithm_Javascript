/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const constructMaximumBinaryTree = (nums:number[], low = 0, high = nums.length - 1):TreeNode | null => {
    if (low > high) return null
    let i = low
    for (let j = low + 1; j <= high; j++) {
        if (nums[j] > nums[i]) i = j
    }
    const root = new TreeNode(nums[i])
    root.left = constructMaximumBinaryTree(nums, low, i - 1)
    root.right = constructMaximumBinaryTree(nums, i + 1, high)
    return root
};