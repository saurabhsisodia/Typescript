class TreeNode{
    val:number;
    left:null|TreeNode;
    right:null|TreeNode;
    constructor(val:number){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}


function findFrequentTreeSum(root: TreeNode | null): number[] {

    let mp=new Map(),
        ans:number[]=[];
    function getSum(root:TreeNode):number{
        if (!root){
            return 0;
        }
        let leftSum:number=getSum(root.left);
        let rightSum:number=getSum(root.right);
        if (mp.has(leftSum+rightSum+root.val)){
            mp.set(leftSum+rightSum+root.val,mp.get(leftSum+rightSum+root.val)+1);
        }else{
            mp.set(leftSum+rightSum+root.val,1);
        }
        return leftSum+rightSum+root.val;
    }
    getSum(root);
    let arr:number[][]=[...mp.entries()].sort((a,b)=>{
        return b[1]-a[1];
    });
    let max:number=arr[0][1];
    for (let [val,freq] of arr){
        if (freq==max){
            ans.push(val);
        }else{
            break;
        }
    }
    return ans;

};