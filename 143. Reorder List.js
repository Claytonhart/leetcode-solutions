var reorderList = function(head) {
  if (!head) return null;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let temp = slow.next;
  slow.next = null;
  slow = temp;

  let prev = null;

  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let newHead = head;
  while (prev) {
    let tempHead = newHead.next;
    let tempPrev = prev.next;
    newHead.next = prev;
    prev.next = tempHead;
    newHead = tempHead;
    prev = tempPrev;
  }
};
