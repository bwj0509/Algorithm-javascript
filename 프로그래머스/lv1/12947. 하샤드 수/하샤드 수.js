function solution(x) {
    let sum = x.toString().split('').reduce((a,b)=> Number(a) + Number(b))
    return x % sum ? false : true
}