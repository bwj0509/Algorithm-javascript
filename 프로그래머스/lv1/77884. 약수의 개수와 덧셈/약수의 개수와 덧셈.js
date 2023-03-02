function solution(left, right) {
    let resultArr = [];
    for(left; right>= left ; left ++){
        let divisorArr = [];
        for(let i=1; i<= left;i++){
            left % i === 0 && divisorArr.push(i)
        }
        
        divisorArr.length % 2 === 0 ? resultArr.push(left) :resultArr.push(-left)
    }
    return resultArr.reduce((a,b)=> a+b)
}