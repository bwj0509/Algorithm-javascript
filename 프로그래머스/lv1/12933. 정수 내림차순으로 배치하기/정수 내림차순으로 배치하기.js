function solution(n) {
    let arr = n.toString().split('')
    arr.sort(function(a,b){
        return b-a
    })
    
    return Number(arr.join(''))
}
