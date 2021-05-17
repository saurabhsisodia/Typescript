
function subarraySum(nums: number[], k: number): number {
	let ans:number=0,
		mp=new Map(),
		i:number=0,
		prefixSum:number=0;

	for (i=0;i<nums.length;i++){
		prefixSum+=nums[i];
		if (prefixSum==k){
			ans+=1;
		}
		if (mp.has(prefixSum-k)){
			ans+=mp.get(prefixSum-k);
		}
		if (mp.has(prefixSum)){
			mp.set(prefixSum,mp.get(prefixSum)+1);
		}
		else{
			mp.set(prefixSum,1);
		}
		
	}
	return ans;


};
