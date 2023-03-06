function solution(lottos, win_nums) {
    let secretNum = 0;
    let count = 0;
    let point = 7;
    lottos.forEach((num)=>{
        if(num === 0){
            secretNum +=1
        }
        else if(win_nums.includes(num)){
            count +=1
        }
    })
    maxRank = 7 - (count + secretNum)
    minRank = 7 - (count)
    if(minRank > 6){
        minRank = 6
    }
    if(maxRank > 6){
        maxRank = 6
    }
    return [maxRank, minRank]
    
}