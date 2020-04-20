/**
 * Definition for a binary tree nodes.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = (preorder) => {
    const res = new TreeNode(preorder[0]);
    if (preorder.length == 1) {
        return res;
    }
    for (let i = 1; i < preorder.length; i++) {
        setNode(res, preorder[i]);
    }
    return res;
};

/**
 * @param {TreeNode} node 
 * @param {number} val 
 */
const setNode = (node, val) => {
    if (node.val < val) {
        if (node.right == null) {
            node.right = new TreeNode(val);
        } else {
            setNode(node.right, val);
        }
    } else {
        if (node.left == null) {
            node.left = new TreeNode(val);
        } else {
            setNode(node.left, val);
        }
    }
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
