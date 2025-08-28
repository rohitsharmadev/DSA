/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 //rohitsharmadev
var rotateRight = function(head, k) {
    if(!head) return head;
    let curr = head;
    let length = 0;

    while(curr) {
        curr = curr.next;
        length++;
    }
    let r = k%length;
    let s = f = head;
    for(let i=0; i < r;i++) {
        f=f.next;
    }
    while(f.next) {
        s = s.next;
        f = f.next;
    }
    f.next=head;
    let newHead = s.next;
    s.next = null;
    return newHead;
};