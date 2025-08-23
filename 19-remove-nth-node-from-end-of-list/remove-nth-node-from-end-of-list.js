/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 //Rohitsharmadev
var removeNthFromEnd = function(head, n) {
    let sant = new ListNode();
    sant.next = head;
    let slow= fast  =sant;
    
    for(let i=0; i<n; i++ ){
        fast = fast.next;
    }

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return sant.next;
};