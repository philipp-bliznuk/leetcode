// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/


//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
};

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


function converList(list) {
    let result = [];
    while (list) {

        list = list.next;
    }
    return result;
};


var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let val, next;
    if (list1.val < list2.val) {
        val = list1.val;
        next = mergeTwoLists(list1.next, list2);
    } else {
        val = list2.val;
        next = mergeTwoLists(list1, list2.next);
    }
    return new ListNode(val, next);
};

function mergeTwoLists2 (list1, list2) {
    let result = new ListNode();
    let current = result;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return result.next;
};


let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(converList(mergeTwoLists(list1, list2)));
console.log(converList(mergeTwoLists2(list1, list2)));

export default mergeTwoLists;
