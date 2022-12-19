function solution(A,B){

    let arr1 = A.sort(function(a, b){
        return a-b
    })
    let arr2 = B.sort(function(a, b){
        return b-a
    })
    let sum = 0;
    for(let i=0;i<arr1.length;i++){
        sum += (arr1[i]*arr2[i])
    }
    return sum
}
