function solution(progresses, speeds) {
    remainDays = progresses.map((progress, index)=>{
        const leakProgress = 100 - progress
        return Math.ceil(leakProgress/speeds[index])
    })
    
    let result = []
    let count = 1
    let firstWork = remainDays[0]
    console.log(remainDays)
    
    
    for(let i=0; i<remainDays.length-1;i++){
        if(remainDays[i+1] <= firstWork){
            count ++
        }
        else{
            result.push(count)
            count = 1
            firstWork = remainDays[i+1]
        }
    }
    
    result.push(count)
    
    return(result)
    
    
    
}