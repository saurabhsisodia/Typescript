interface Tweet{
    stack:number[][];
    postTweet(userId:number,tweetId:number):void;
    getNewsFeed(userId:number):number[];
    follow(followerId:number,followeeId:number):void;
    unfollow(followerId:number,followeeId:number):void;
}
class Twitter implements Tweet{
    stack:number[][];
    following:any;
    constructor(){
        this.stack=[];
        this.following=new Map()
    }
    postTweet(userId:number,tweetId:number):void{
        this.stack.push([userId,tweetId]);
    }
    getNewsFeed(userId:number):number[]{
        let count:number=0;
        let length:number=this.stack.length;
        let i:number=length-1;
        let ans:number[]=[];
        while (count<10 && i>=0){
            let [uId,tId]=this.stack[i];
            if (uId==userId){
                ans.push(tId);
                count++;
                i--;
                continue;
            }
            if (this.following.has(userId)){
                let st=this.following.get(userId);
                if (st.has(uId)){
                    ans.push(tId);
                    count++;
                }
            }
            i--;

        }
        return ans;
    }
    follow(followerId:number,followeeId:number):void{
        if (this.following.has(followerId)){
            this.following.get(followerId).add(followeeId);
        }else{
            let st=new Set();
            st.add(followeeId);
            this.following.set(followerId,st);
        }
    }
    unfollow(followerId:number,followeeId:number):void{
        if (this.following.has(followerId)){
            this.following.get(followerId).delete(followeeId);
        }
    }
}