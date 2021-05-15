// structure Queue node
class ListNode{
    val:number;
    next:null|ListNode;
    prev:null|ListNode;
    constructor(val:number){
        this.val=val;
        this.prev=null;
        this.next=null;

    }
}
class frontMiddleBackQueue{
    head:null|ListNode;
    end:null|ListNode;
    size:number;
    constructor(){
        this.head=null;
        this.end=null;
        this.size=0;
    }

    pushBack(val:number):void{
        let newNode:null|ListNode=new ListNode(val);
        this.size++;
        if (!this.head){
            this.head=newNode;
            this.end=newNode;
        }else{
            this.end.next=newNode;
            newNode.prev=this.end;
            this.end=this.end.next;
        }
    }
    popBack():number{
        let res:number;
        this.size--;
        if (!this.head.next){
            res=this.head.val;
            this.head=null;
            this.end=null;
        }else{
            this.end=this.end.prev;
            res=this.end.next.val;
            this.end.next=null;
        }       
        return res;
    }
    pushFront(val:number):void{
        
        if(!this.head){
            this.pushBack(val);
        }else{
            this.size++;
            let newNode:null|ListNode=new ListNode(val);
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
    }
    popFront():number{
        let res:number;
        this.size--;
        if (!this.head.next){
            res=this.head.val;
            this.head=null;
            this.end=null;
        }
        else{
            res=this.head.val;
            this.head=this.head.next;

            this.head.prev=null;    
        }
        return res;
    }
    pushMiddle(val:number){
        
    }
}
let obj=new frontMiddleBackQueue();
obj.pushFront(1);
obj.pushFront(2);
obj.pushBack(1);
console.log(obj.popBack());
console.log(obj.popBack());
console.log(obj.popBack());