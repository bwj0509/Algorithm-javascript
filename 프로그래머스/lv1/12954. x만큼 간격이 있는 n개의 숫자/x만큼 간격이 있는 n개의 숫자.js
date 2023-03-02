function solution(x, n) {
    let resultArr = [];
    const interver  = x
    for(n; n>0; n--){
        resultArr.push(x)
       x += interver
    }
    return resultArr
}