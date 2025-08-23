/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //rohitsharmadev
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let odd = head;
    let even = odd.next;
    let evenStart = even;
    while(odd.next && even.next) {
                odd.next = odd.next.next;
        even.next = even.next.next;
 odd= odd.next;
        even = even.next;
       
    }
    odd.next = evenStart;
    return head;
};