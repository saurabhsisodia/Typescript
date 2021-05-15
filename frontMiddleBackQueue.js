// structure Queue node
var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
    return ListNode;
}());
var frontMiddleBackQueue = /** @class */ (function () {
    function frontMiddleBackQueue() {
        this.head = null;
        this.end = null;
        this.middle = null;
    }
    frontMiddleBackQueue.prototype.pushBack = function (val) {
        var newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.end = newNode;
        }
        else {
            this.end.next = newNode;
            newNode.prev = this.end;
            this.end = this.end.next;
        }
    };
    frontMiddleBackQueue.prototype.popBack = function () {
        var res;
        if (!this.head.next) {
            res = this.head.val;
            this.head = null;
            this.end = null;
        }
        else {
            this.end = this.end.prev;
            res = this.end.next.val;
            this.end.next = null;
        }
        return res;
    };
    frontMiddleBackQueue.prototype.pushFront = function (val) {
        if (!this.head) {
            this.pushBack(val);
        }
        else {
            var newNode = new ListNode(val);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    };
    frontMiddleBackQueue.prototype.popFront = function () {
        var res;
        if (!this.head.next) {
            res = this.head.val;
            this.head = null;
            this.end = null;
        }
        else {
            res = this.head.val;
            this.head = this.head.next;
            this.head.prev = null;
        }
        return res;
    };
    return frontMiddleBackQueue;
}());
var obj = new frontMiddleBackQueue();
obj.pushFront(1);
obj.pushFront(2);
obj.pushBack(1);
console.log(obj.popBack());
console.log(obj.popBack());
console.log(obj.popBack());
