var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      current.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    current = current.next;
  }

  while (l1) {
    current.next = new ListNode(l1.val);
    current = current.next;
    l1 = l1.next;
  }

  while (l2) {
    current.next = new ListNode(l2.val);
    current = current.next;
    l2 = l2.next;
  }

  return dummy.next;
};
