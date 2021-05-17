function Indices(s:string):number[]{
        let ans:number[]=[];
        for (let i=0;i<s.length;i++){
                if (s[i]=="("){
                        ans.push(i);
                }else if (s[i]==")"){
                        ans.push(i);
                }
        }
        return ans;
}
function findDuplicate(paths: string[]): string[][] {

    let mp=new Map();
    for (let i=0;i<paths.length;i++){
        let arr:string[]=paths[i].split(" ");
        for (let j=1;j<arr.length;j++){
            let [start,end]=Indices(arr[j]);
            let content:string=arr[j].slice(start,end+1);
            if (mp.has(content)){
                mp.get(content).push(arr[0]+"/"+arr[j].slice(0,start));
            }else{
                mp.set(content,[arr[0]+"/"+arr[j].slice(0,start)]);
            }
        }
    }
    let ans:string[][]=[];
    for (let a of mp.values()){
        if (a.length>1){
            ans.push(a);
        }
    }
    return ans;
}

