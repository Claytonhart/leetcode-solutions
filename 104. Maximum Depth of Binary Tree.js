var maxDepth = function(root) {
  if (!root) return 0;
  let queue = [root];
  let depth = 0;

  while (queue.length) {
    depth++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
};
