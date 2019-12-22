//https://leetcode.com/problems/find-largest-value-in-each-tree-row/
/*
  Bfs using a queue, calculating the max of each level
  Time => O(n)
  Space => O(n) -> the queue has to store (n/2 + 1) elements at most
*/
var largestValues = function(root) {
  if (!root) return [];
  let queue = [root];
  let largest = [];

  while (queue.length) {
    let len = queue.length;
    let max = -Infinity;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      max = Math.max(max, node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    largest.push(max);
  }

  return largest;
};

/*
  You need to find the largest value in each row of a binary tree.

  Example:
  Input: 

           1
          / \
         3   2
        / \   \  
       5   3   9 

  Output: [1, 3, 9]
*/
