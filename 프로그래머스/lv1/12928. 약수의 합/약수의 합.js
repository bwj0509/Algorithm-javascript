function solution(n) {
    let sum = 0;
    for(let i=1; n>=i; i++){
        if( n % i === 0){
            sum += i
        }
    }
    return sum
}