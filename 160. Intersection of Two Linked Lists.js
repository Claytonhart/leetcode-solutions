var getIntersectionNode = function (headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA) {
    nodeA = nodeA.next;
    lenA++;
  }

  while (nodeB) {
    nodeB = nodeB.next;
    lenB++;
  }

  nodeA = headA;
  nodeB = headB;
  if (lenA > lenB) {
    let diff = lenA - lenB;
    while (diff > 0) {
      nodeA = nodeA.next;
      diff--;
    }
  } else if (lenB > lenA) {
    let diff = lenB - lenA;
    while (diff > 0) {
      nodeB = nodeB.next;
      diff--;
    }
  }

  while (nodeA) {
    if (nodeA === nodeB) return nodeA;
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  return null;
};
