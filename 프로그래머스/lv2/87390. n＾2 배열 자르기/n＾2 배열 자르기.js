function solution(n, left, right) {
    let result = []
    for(let i=left; i<=right; i++){
        // console.log(i, '수는',Math.ceil((i+1)/n), '줄에있고', i%n+1, '번째이다.' )
       
        if(i%n+1 > Math.ceil((i+1)/n)){
            // console.log(i,'는 if')
            result.push(i%n+1)
        }
        else{
            // console.log(i,'는 else')
            result.push(Math.ceil((i+1)/n))
        }
        
    }
    return(result)
}