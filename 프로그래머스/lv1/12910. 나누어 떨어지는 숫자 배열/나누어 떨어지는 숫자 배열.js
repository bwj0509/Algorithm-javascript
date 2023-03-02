function solution(arr, divisor) {
    let resultArr = [];
    
    arr.forEach((element)=> {
        element % divisor === 0 && resultArr.push(element)
    } )
    
    resultArr.length === 0 && resultArr.push(-1)
    
    return resultArr.sort((a,b)=> a-b)
}