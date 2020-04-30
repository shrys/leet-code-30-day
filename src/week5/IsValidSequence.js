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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {
  return dfs(root, arr, 0);
};

var dfs = function (root, arr, arrIdx) {
  if (arr.length - 1 == arrIdx) {
    if (
      root &&
      root.val == arr[arrIdx] &&
      root.left == null &&
      root.right == null
    )
      return true;
    else return false;
  }

  if (root == null) return false;

  if (root.val != arr[arrIdx]) return false;

  return dfs(root.left, arr, arrIdx + 1) || dfs(root.right, arr, arrIdx + 1);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  0,
  new TreeNode(
    1,
    new TreeNode(0, null, new TreeNode(1)),
    new TreeNode(1, new TreeNode(0), new TreeNode(0))
  ),
  new TreeNode(0, new TreeNode(0))
);
console.log(isValidSequence(root, [0, 1, 0, 1]));
console.log(isValidSequence(root, [0, 0, 1]));
console.log(isValidSequence(root, [0, 1, 1]));
console.log(isValidSequence(root, [0, 1, 1, 0]));

// const root = new TreeNode(8,
//   new TreeNode(3, new Tre)
//   )
// [8,3,null,2,1,5,4]
// [8]
