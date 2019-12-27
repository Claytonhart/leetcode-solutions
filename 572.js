var isSubtree = function(s, t) {
    
    let isSameTree = (big,small) => {
        if (big === null && small === null) return true;
        if (big === null || small === null) return false;
        
        return (big.val === small.val) && isSameTree(big.left,small.left) && isSameTree(big.right,small.right);
    }
    
    let dfs = (node) => {
        if (node === null) return false;
        
        if (node.val === t.val) {
            if (isSameTree(node,t)) return true;
        }
        
        return dfs(node.left) || dfs(node.right);
    }
    
    return dfs(s);
};