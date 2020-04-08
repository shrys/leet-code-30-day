/**
 * Definition for singly-linked list.
 * @param {number} val
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function LinkedList(arr) {
    const head = new ListNode(arr[0]);
    let currentNode = head;
    for (i = 1; i < arr.length; i++) {
        currentNode.next = new ListNode(arr[i]);
        currentNode = currentNode.next;
    }
    return head;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = head => {
    let slow = head;
    let fast = head;
    const arr = [];
    if (head != null) {
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
    }
    return slow;
};


console.log(middleNode(new LinkedList([1, 2, 3, 4, 5])));