/**
 * Definition for a binary tree nodes.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const Diameter = function (root) {
    const DandH = [0, 0]; // initialize the height (DandH[0]) and diameter
    // as 0 (DandH[1])
    if (root != null) {

        const leftResult = Diameter(root.left);
        const rightResult = Diameter(root.right);

        const height = Math.max(leftResult[0], rightResult[0]) + 1;
        const leftDiameter = leftResult[1];
        const rightDiameter = rightResult[1];
        const rootDiameter = leftResult[0] + rightResult[0];
        const finalDiameter = Math.max(leftDiameter, rightDiameter, rootDiameter);
        // prepare the DandH[]
        DandH[0] = height; // update the height
        DandH[1] = finalDiameter;
        return DandH;
    }
    return DandH;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
    return Diameter(root)[1];
};

const nodes = [1, 2, 3, 4, 5].map(n => new TreeNode(n));
nodes[0].left = nodes[1];
nodes[0].right = nodes[2];
nodes[1].left = nodes[3];
nodes[1].right = nodes[4];

console.log(diameterOfBinaryTree(nodes[0]), diameterOfBinaryTree(nodes[4]));