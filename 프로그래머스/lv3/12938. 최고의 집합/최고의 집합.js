function solution(n, s) {
    
    let num = Math.floor(s/n)
    
    if(num < 1){
        return [-1]
    }
    let arr = Array(n).fill(num)
    
    let repeatNum = s % n
    
    for(let i=0;i<repeatNum;i++){
        arr[arr.length-1-i] = arr[arr.length-1-i]+1
    }
    
    return arr
}