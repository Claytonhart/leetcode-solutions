var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode();
  let prev = dummy;
  let remainder = 0;

  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + remainder;
    remainder = Math.floor(sum / 10);
    prev.next = new ListNode(sum % 10);
    prev = prev.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (remainder > 0) {
    prev.next = new ListNode(remainder);
  }

  return dummy.next;
};
