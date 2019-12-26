var isSymmetric = function(root) {
    if (!root) return true;
    let isSame = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        
        return (left.val === right.val) && isSame(left.right, right.left) && isSame(right.right, left.left);
    }
    
    return isSame(root.left, root.right);
}