var swapPairs = function(head) {
    if (!head) return null;
    if (head.next === null) return head;
    
    let newHead = head.next;
    let prev = null;
    let first = head;
    let second = head.next;
    let next = second.next;
    
    while (second) {
        if (prev) prev.next = second;
        next = second.next;
        second.next = first;
        first.next = next;
        prev = first;
        
        if (next === null || next.next === null) return newHead;
        first = next;
        second = next.next;
    }
    return newHead;
};