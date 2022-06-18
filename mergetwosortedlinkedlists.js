/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var retHead;
    var dummy = new ListNode(0, null);
    retHead = dummy;
        
    while (true) {
        if (list1 == null) {
            dummy.next = list2;
            break;
        }
        if (list2 == null) {
            dummy.next = list1;
            break;
        }
        
        if (list1.val < list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    return retHead.next;
};
