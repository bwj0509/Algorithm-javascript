function solution(k, score) {
    let arr =[]
    let reward =[]
    for(let i=0; i<score.length; i++){
        if(arr.length<k){
            arr.push(score[i])
            arr.sort((a,b)=>b-a)
        }
        else{
            if(score[i] > arr[arr.length-1]){
                arr[arr.length-1] = score[i]
                arr.sort((a,b)=>b-a)
            } 
        }
        reward.push(arr[arr.length-1])
    }
    return(reward)
}