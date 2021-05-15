function Distance(point1:number[],point2:number[]):number{
    return Math.sqrt(Math.pow(point1[0]-point2[0],2)+Math.pow(point1[1]-point2[1],2));
}
function numberOfBoomerangs(points: number[][]): number {
    let ans:number=0,
        mp=new Map();
    
        for (let i=0;i<points.length;i++){
            for (let j=0;j<points.length;j++){
                if (i!=j){
                    let d:number=Distance(points[i],points[j]);
                    if (mp.has(d)){
                        mp.set(d,mp.get(d)+1);
                    }
                    else{
                        mp.set(d,1);
                    }
                }
            }
            for (let v of mp.values()){
                ans+=v*(v-1);
            }
            mp.clear();
        }
        return ans;
};