function solution(arr) {
    let minNum = Math.min(...arr)
    const resultArr = arr.filter((element)=> element != minNum)
    
    return resultArr.length ? resultArr : [-1]
    
    return resultArr
}