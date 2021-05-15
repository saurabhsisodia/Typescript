function search(nums:number[],target:number):number{

    function BS(nums:number[],l:number,r:number,target:number):number{

        if (l>r){
            return -1;
        }

        let mid=Math.floor((l+r)/2);
        if (nums[mid]==target){
            return mid;
        }
        if (nums[mid]>nums[l]){
            if (target>=nums[l] && target<=nums[mid]){
                return BS(nums,l,mid-1,target);
            }
            else{
                return BS(nums,mid+1,r,target);
            }
        }else{
            if (target>=nums[mid] && target<=nums[r]){
                return BS(nums,mid+1,r,target);
            }
            else{
                return BS(nums,l,mid-1,target);
            }
        }

    }
    return BS(nums,0,nums.length,target);
}
// let bsForPivot=(nums:number[],l:number,r:number):number=>{
//     let mid=Math.floor((l+r)/2);
//     if (nums[mid]>nums[mid+1]){
//         return mid;
//     }
//     else if (nums[l]>nums[mid]){
//         return bsForPivot(nums,l,mid-1);
//     }
//     else{
//         return bsForPivot(nums,mid+1,r);
//     }
// }
// let BS=(nums:number[],l:number,r:number,target:number):number=>{
//     let mid=Math.floor((l+r)/2);
//     if (l>r){
//         return -1;
//     }
//     if (nums[mid]==target){
//         return mid;
//     }
//     if (nums[mid]>target){
//         return BS(nums,l,mid-1,target);
//     }
//     return BS(nums,mid+1,r,target);

// }

// function search(nums:number[],target:number):number{
//     if (nums.length==1){
//         if (nums[0]==target){
//             return 0;
//         }
//         else{
//             return -1;
//         }
//     }
//     if (nums.length==2){
//         if (nums[0]==target){
//             return 0;
//         }
//         if (nums[1]==target){
//             return 1;
//         }
//         return -1;
//     }
//     if (nums[nums.length-1]>nums[nums.length-2] && nums[nums.length-1]>nums[0]){
//         return BS(nums,0,nums.length-1,target);
//     }
//     if (nums[0]>nums[1] && nums[0]>nums[nums.length-1]){
//         if (nums[0]==target){
//             return 0;
//         }
//         return BS(nums,1,nums.length-1,target);
//     }
//     let pivotIndex=bsForPivot(nums,0,nums.length);
//     console.log(pivotIndex);

//     let first=BS(nums,0,pivotIndex,target);
//     if (first!=-1){
//         return first;
//     }
//     return BS(nums,pivotIndex+1,nums.length,target);
    
// }

// console.log(search([7,8,1,2,3,4,5,6],2));
