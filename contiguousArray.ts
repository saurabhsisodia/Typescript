function findMaxLength(nums: number[]): number {
    if(nums.length<=1){
        return 0;
    }
    let mp=new Map(),
        count:number=nums[0] == 0?-1:1,
        ans:number=-1;
    mp.set(count,0);
    for (let i=1;i<nums.length;i++){
        count+=nums[i] == 0?-1:1;
        if (count==0){
            ans=Math.max(ans,i+1);
        }
        else if (mp.has(count)){
            ans=Math.max(ans,i-mp.get(count));
        }
        else{
            mp.set(count,i);
        }
    }
    return ans==-1?0:ans;
};