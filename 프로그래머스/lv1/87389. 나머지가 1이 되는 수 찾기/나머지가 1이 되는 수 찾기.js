function solution(n) {
    let startNum = 0
    while(startNum < n){
        if(n % startNum === 1){
            break;
        }
        else{
            startNum += 1
        }
    }
    return startNum
}