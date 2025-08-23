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
    let length =0;
    while(head) {
        head = head.next;
        length++;
    }

    let prevPos = length -n;
    let prev = sant;
    for(let i=0; i<prevPos; i++ ){
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sant.next;
};