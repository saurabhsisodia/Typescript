interface struct{
    [index:number]:(string|number);
}
function merge(left,right){
    let i:number=0,
        j:number=0,
        ans=[];
    while (i<left.length && j<right.length){
        if (left[i][1]>=right[j][1]){
            ans.push(left[i]);
            i++;
        }else{
            ans.push(right[j]);
            j++;
        }
    }
    while (i<left.length){
        ans.push(left[i]);
        i++;
    }
    while (j<right.length){
        ans.push(right[j]);
        j++;
    }
    return ans;
}
function mergeSort(f){
    if (f.length<=1){
        return f;
    }
    let mid:number=Math.floor(f.length/2);
    let left=mergeSort(f.slice(0,mid));
    let right=mergeSort(f.slice(mid,));
    return merge(left,right);

}
function frequencySort(s: string): string {
    let mp=new Map();
    for (let chr of s){
        if (mp.has(chr)){
            mp.set(chr,mp.get(chr)+1);
        }else{
            mp.set(chr,1);
        }
    };
    let arr=[...mp.entries()];
    arr=mergeSort(arr);
    let ans='';
    for (let [k,v] of arr){
      ans+=k.repeat(v);  
    }
    return ans;

}