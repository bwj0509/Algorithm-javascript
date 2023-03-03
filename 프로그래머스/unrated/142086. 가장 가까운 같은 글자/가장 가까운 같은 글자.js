function solution(s) {
    let sArr = s.split('')
    let resultArr = []
    for(let i=0; i<s.length;i++){
        let count = -1
        for(let j=0; j<i; j++){
            if(s[i] === s[j]){
                 count = i-j
            }
            
        }
        resultArr.push(count)
    }
    
    return resultArr
}