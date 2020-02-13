var sumNumbers = function(root) {
  let sum = 0;
  let helper = (node, pathValues) => {
    if (!node) return false;

    let newPathValues = [...pathValues, node.val];
    let left = helper(node.left, newPathValues);
    let right = helper(node.right, newPathValues);

    if (!left && !right) {
      sum += Number(newPathValues.join(''));
    }

    return true;
  };

  helper(root, []);
  return sum;
};
