function kthSmallest(root,k) {
    let stack = [];
    
    while (true) {
        while (root !== null) {
            stack.push(root);
            root = root.left
        }
        root = stack.pop();
        k--;
        if (k === 0) return root.val;
        root = root.right;
    }
}