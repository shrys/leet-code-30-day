/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  if (root === null) {
    return 0;
  }
  return maxPathSumUtil(root)[1];
};
// returns both single path and max path
// single path: max path starting from the root. May contain no node
var maxPathSumUtil = function (root) {
  if (root === null) {
    return [0, Number.MIN_SAFE_INTEGER];
  }
  var leftPaths, rightPaths;
  var singlePath, maxPath, singlePath1, maxPath1, singlePath2, maxPath2;

  leftPaths = maxPathSumUtil(root.left);
  rightPaths = maxPathSumUtil(root.right);

  singlePath1 = leftPaths[0];
  maxPath1 = leftPaths[1];
  singlePath2 = rightPaths[0];
  maxPath2 = rightPaths[1];

  var maxPathThroughRoot = singlePath1 + singlePath2 + root.val;
  maxPath = Math.max(maxPath1, maxPath2, maxPathThroughRoot);
  singlePath = Math.max(singlePath1 + root.val, singlePath2 + root.val, 0);

  return [singlePath, maxPath];
};
var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);

node1.left = node2;
node2.left = node3;
var result = maxPathSum(node1);
console.log(result);
