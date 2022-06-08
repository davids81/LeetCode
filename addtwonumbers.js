/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var cur = new ListNode(0);
    var output = cur;
    var carry = 0;
    
    while (l1 || l2) {
       
        var num1 = 0;
        var num2 = 0;
        
        if (l1) {
            num1 = l1.val;
            l1 = l1.next;
        }
        
        if (l2) {
            num2 = l2.val;
            l2 = l2.next;
        }

        var addResult = num1 + num2 + carry;
        if (addResult >= 10) {
            cur.next = new ListNode(addResult - 10);
            carry = 1;
        } else {
            cur.next = new ListNode(addResult);
            carry = 0;
        }

        cur = cur.next;
    }
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }
    
    return output.next;
};