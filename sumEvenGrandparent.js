// 1315. Sum of Nodes with Even-Valued Grandparent
// Medium

// 210

// 8

// Add to List

// Share
// Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

// If there are no nodes with an even-valued grandparent, return 0.

// Example 1:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
  let evenSum = 0;

  const traverse = node => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);
};
