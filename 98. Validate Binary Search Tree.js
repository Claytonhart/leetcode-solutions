var isValidBST = function(root) {
  let helper = (node, low, high) => {
    if (!node) return true;

    let val = node.val;
    if (low !== null && val <= low) return false;
    if (high !== null && val >= high) return false;

    if (!helper(node.left, low, val)) return false;
    if (!helper(node.right, val, high)) return false;

    return true;
  };

  return helper(root, null, null);
};
