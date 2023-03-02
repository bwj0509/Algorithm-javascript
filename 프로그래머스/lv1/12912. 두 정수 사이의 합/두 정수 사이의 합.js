function solution(a, b) {
    let result = 0;
    if(a>b){
        [a,b] = [b,a]
    }
    
    for(a; b>=a; a++){
        result += a
    }
    return result
}