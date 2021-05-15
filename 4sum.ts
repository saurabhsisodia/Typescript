function fourSum(nums:number[],target:number):number[][]{


    function twoSum(nums:number[],target:number):number[][]{
        let ans:number[][]=[],
            low:number=0,
            high:number=nums.length-1;
            while (low<high){
                let sum=nums[low]+nums[high];

                if (sum<target || (low>0 && nums[low]==nums[low-1])){
                    low++;
                }else if (sum>target || (high<nums.length-1 && nums[high]==nums[high+1])){
                    high--;
                }else{
                    ans.push([nums[low],nums[high]]);
                    low++;
                    high--;
                }
            }
            return ans;
    }

    function kSum(nums:number[],target:number,k:number):number[][]{
        let ans:number[][]=[];
        if (!nums.length){
            return ans;
        }
        if (k==2){
            return twoSum(nums,target);
        }

        for (let i=0;i<nums.length;i++){
            if (i==0 || nums[i]!=nums[i-1]){
                for (let items of kSum(nums.slice(i+1,),target-nums[i],k-1)){
                    ans.push([nums[i],...items]);
                }
            }
        }
        return ans;
    }

    nums.sort((a:number,b:number)=>{
        return a-b;
    });
    return kSum(nums,target,4);
}