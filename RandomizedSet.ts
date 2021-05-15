class RandomizedSet{
    mp:any;
    arr:number[];
    length:number;
    constructor(){
        this.mp=new Map();
        this.arr=[];
        this.length=0;
    }
    insert (val:number):boolean{
        if (this.mp.has(val)){
            return false;
        }
        this.arr.push(val);
        this.mp.set(val,this.length);
        this.length++;
        return true;
    }
    remove(val:number):boolean{
        if (this.mp.has(val)){
            return false;
        }
        let index:number=this.mp.get(val);
        [this.arr[index],this.arr[this.length-1]]=[this.arr[this.length-1],this.arr[index]];
        this.mp.set(this.arr[index],index);
        this.arr.pop();
        this.length--;
        this.mp.delete(val);
        return true;
    }
    getRandom():number{
        let randomIndex=Math.floor(Math.random()*this.length);
        return this.arr[randomIndex];
    }
}