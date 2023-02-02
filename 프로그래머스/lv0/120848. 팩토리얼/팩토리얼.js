function solution(n) {
    const Arr = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
    let result = 0;
    for(i=0; i<10;i++){
        if(Arr[i]<=n){
            result = i+1
        }
    }
    return result
}