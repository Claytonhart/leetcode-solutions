var detectCycle = function(head) {
    if (!head) return null;
    let slow = head;
    let fast = head;
    
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }
    
    if (fast.next === null || fast.next.next === null) return null;
    
    slow = head;
    
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    
    return slow;
};