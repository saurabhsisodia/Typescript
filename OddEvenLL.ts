class ListNode{
    value:null|number;
    next:null|ListNode;
    constructor(value?:null|number,next?:null|ListNode){
        this.value=value;
        this.next=null;
    }
};

function Append(head:null|ListNode,data:number|null):null|ListNode{

    if (!head){
        head=new ListNode(data);
    }else{
        let curr:null|ListNode=head;
        while (curr.next){
            curr=curr.next;
        }
        curr.next=new ListNode(data);
    }
    return head;
}
function Display(head:null|ListNode){
    let curr:null|ListNode=head;
    while (curr){
        console.log(curr.value);
        curr=curr.next;
    }
}

function oddEvenList(head:null|ListNode):null|ListNode{

    if (!head || !head.next || !head.next.next){
        return head;
    }
    // play with some pointers
    let curr:null|ListNode=head.next.next,
        head1:null|ListNode=head,
        head2:null|ListNode=head.next,
        end1:null|ListNode=head,
        end2:null|ListNode=head.next,
        tmp:null|ListNode;
    
    // to avoid looping 
    end1.next=null;
    end2.next=null;
    
    // true for 3rd node
    let i:boolean=true;
    
    while (curr){
        tmp=curr.next;
        if (i){

            end1.next=curr;
            end1=end1.next;
            end1.next=null;
        }else{
            end2.next=curr;
            end2=end2.next;
            end2.next=null;
        }
        curr=tmp;

        i=!i;
    }
    end1.next=head2;

    return head1;
}

let head=null;
for (let i=1;i<6;i++){
    head=Append(head,i);
}
Display(head);


head=oddEvenList(head);
Display(head);