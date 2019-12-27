var levelOrderBottom = function(root) {
    if (!root) return [];
    let values = [];
    let queue = [root];
    
    while (queue.length) {
        let len = queue.length;
        let arr = [];
        for (let i = 0; i < len; i++){
            let node = queue.shift();
            arr.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        values.push(arr);
    }
    
    return values.reverse();
};