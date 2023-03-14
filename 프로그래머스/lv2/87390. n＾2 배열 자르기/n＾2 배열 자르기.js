function solution(n, left, right) {
    let result = []
    for(let i=left; i<=right; i++){
        if(i%n+1 > Math.ceil((i+1)/n)){
            result.push(i%n+1)
        }
        else{
            result.push(Math.ceil((i+1)/n))
        }
        
    }
    return(result)
}