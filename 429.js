var levelOrder = function(root) {
    if (!root) return [];
    let values = [];
    let queue = [root];
    
    while (queue.length) {
        let len = queue.length;
        let levelValues = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            levelValues.push(node.val);
            
            for (let j = 0; j < node.children.length; j++){
                queue.push(node.children[j]);
            }
        }
        values.push(levelValues);
    }
    
    return values;
};