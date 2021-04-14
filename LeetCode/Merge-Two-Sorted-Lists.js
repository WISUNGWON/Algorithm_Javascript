var mergeTwoLists = function (l1, l2) {
  let mergedlist = new ListNode();
  let change = mergedlist;

  while (l1 !== null && l2 !== null) {
    //두개의 리스트의 크기 비교를 하면서 하나의 리스트에 merge
    if (l1.val <= l2.val) {
      change.next = l1;
      l1 = l1.next;
    } else {
      change.next = l2;
      l2 = l2.next;
    }
    // change값 계속 변경
    change = change.next;
    console.log('check change', change);
    console.log('check mergedlist', mergedlist);
  }

  if (l1 !== null) {
    change.next = l1;
  }
  if (l2 !== null) {
    change.next = l2;
  }

  return mergedlist.next;
};
