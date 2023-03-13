function solution(s) {
    let sArr = s.split('')
    let arr = []
    let result = 0
    
    for(let i=0; i<s.length;i++){
        let temp = sArr.shift()
        sArr.push(temp)
        arr.push(sArr.join(''))
    }
    
    arr.forEach((item)=>{
        let tempArr = []
        for(let i=0; i<item.length; i++){
            if(tempArr.length >= 1){ // 길이가 2 이상일때 검증을 하자고~
                if(item[i] === ']' && tempArr[tempArr.length-1] === '['){
                    tempArr.pop()
                }
                else if(item[i] === '}' && tempArr[tempArr.length-1] === '{'){
                    tempArr.pop()
                }
                else if(item[i] === ')' && tempArr[tempArr.length-1] === '('){
                    tempArr.pop()
                }
                else{
                    tempArr.push(item[i])
                }
            }
            else{
                tempArr.push(item[i])
            }
            
        }
        if(tempArr.length === 0){
            result +=1
        }
    })
    return result
}