function reverseList(node) {
    if (!node) return null;
    if (node.next === null) return node;
    
    let prev = null
    while (node) {
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }
    return prev;
}

var recursiveReverseList = function(node, prevNode = null) {
    if (!node) return null;
    if (node.next === null) {
        node.next = prevNode;
        return node;
    }
    
    let temp = node.next;
    node.next = prevNode;
    
    return recursiveReverseList(temp, node);
};