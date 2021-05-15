var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
;
function Append(head, data) {
    if (!head) {
        head = new ListNode(data);
    }
    else {
        var curr = head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = new ListNode(data);
    }
    return head;
}
function Display(head) {
    var curr = head;
    while (curr) {
        console.log(curr.value);
        curr = curr.next;
    }
}
function oddEvenList(head) {
    if (!head || !head.next || !head.next.next) {
        return head;
    }
    // play with some pointers
    var curr = head.next.next, head1 = head, head2 = head.next, end1 = head, end2 = head.next;
    // to avoid looping 
    end1.next = null;
    end2.next = null;
    // true for 3rd node
    var i = true;
    while (curr) {
        var tmp = curr.next;
        if (i) {
            end1.next = curr;
            end1 = end1.next;
            end1.next = null;
        }
        else {
            end2.next = curr;
            end2 = end2.next;
            end2.next = null;
        }
        curr = tmp;
        i = !i;
    }
    end1.next = head2;
    return head1;
}
var head = null;
for (var i = 1; i < 6; i++) {
    head = Append(head, i);
}
Display(head);
head = oddEvenList(head);
Display(head);
