// 103. Binary Tree Zigzag Level Order Traversal
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    let result = [];
    let queue = [root];
    let isLeftToRight = true;

    while (queue.length > 0) {
        let level = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (isLeftToRight) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(level);
        isLeftToRight = !isLeftToRight;
    }

    return result;
};

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]
