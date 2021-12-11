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

function increasingBST(root: TreeNode | null): TreeNode | null {
    const vals = [];
    const dfs = (node) => {
        vals.push(node.val);
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    vals.sort((a,b) => a - b)
    const [first, ...rest] = vals;
    const newRoot = new TreeNode(first);
    let tempNewRoot = newRoot;
    rest.forEach((val) => {
        const newNode = new TreeNode(val);
        tempNewRoot.right = newNode;
        tempNewRoot = tempNewRoot.right;
    })
    return newRoot
};

function increasingBST2(root: TreeNode | null): TreeNode | null {
   let newRoot = null, newTree = null;
    const dfs = (node) => {
        if(!node) return;
        dfs(node.left);
        
        if(!newRoot) {
            newRoot = newTree = node;
        } else {
            newTree.right = node;
            newTree = newTree.right;
            node.left = null;
        }
        
        dfs(node.right);
    }
    
    dfs(root);
    return newRoot;
};