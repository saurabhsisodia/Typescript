
function check(arr1:number[],arr2:number[]):boolean{
    for (let i=0;i<26;i++){
        if (arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
}
function findAnagrams(s:string,p:string):number[]{
    let arr:number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let ans:number[]=[],
        lengthP:number=p.length,
        lengthS:number=s.length,
        j:number=0;
    if (lengthP>lengthS){
        return ans;
    }
    let arrP:number[]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let chr of p){
        arrP[chr.charCodeAt(0)-97]++;
    }
    for (let i=0;i<lengthP;i++){
        arr[s[i].charCodeAt(0)-97]++;
    }
    if (check(arr,arrP)){
        ans.push(0);
    }
    for (let i=lengthP;i<lengthS;i++){
        arr[s[j].charCodeAt(0)-97]--;
        arr[s[i].charCodeAt(0)-97]++;
        j++;
        if (check(arr,arrP)){
            ans.push(j);
        }
        
    }
    return ans;



}



// let mp=new Map(),
//     str:string="abcdefghijklmnopqrstuvwxyz";
// for (let i=1;i<27;i++){
//     mp.set(str[i-1],i);
// }
// function getXOR(p:string):number{
//     let xor:number=0;
//     for (let s of p){
//         xor=xor^mp.get(s);
//     }
//     return xor;
// }
// function findAnagrams(s:string,p:string):number[]{
//     let ans:number[]=[],
//         lengthP:number=p.length,
//         lengthS:number=s.length;
//     if (lengthP>lengthS){
//         return ans;
//     }
//     let xorP:number= getXOR(p);
//     let xorS:number=getXOR(s.slice(0,lengthP)),
//         start:number=0;
//     if (xorP==xorS){
//         ans.push(0);
//     }
//     for (let i=lengthP;i<lengthS;i++){
//         xorS=xorS^mp.get(s[start]);
//         xorS=xorS^mp.get(s[i]);
//         if (xorS==xorP){
//             ans.push(i);
//         }
//         start++;
//     }
//     return ans;

// }

// console.log(findAnagrams("cbaebabacd","abc"));
// console.log(findAnagrams("abab","ab"));