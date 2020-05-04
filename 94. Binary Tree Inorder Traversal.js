var inorderTraversal = function (root) {
  let vals = [];
  let helper = (node) => {
    if (!node) return;

    helper(node.left);
    vals.push(node.val);
    helper(node.right);
  };
  helper(root);
  return vals;
};
