var minDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    let queue = [root];
    
    while (queue.length) {
        let len = queue.length;
        depth++;
        for (let i = 0; i < len; i++){
            let node = queue.shift();
            if (node.left === null && node.right === null) return depth;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
};