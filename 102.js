var levelOrder = function(root) {
    if (!root) return [];
    let order = [];
    let queue = [root];
    
    while (queue.length) {
        let len = queue.length;
        let vals = [];
        for (let i = 0; i < len; i++){
            let node = queue.shift();
            vals.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        order.push(vals);
    }
    
    return order;
};