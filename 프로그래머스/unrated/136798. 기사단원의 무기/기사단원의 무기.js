function solution(number, limit, power) {
    let arr = Array(number).fill(0)
    let sum = 0;
    
    for(let i=1; i<number+1; i++){
        for(let j=1; j<i/2+1; j++){
            if(i % j ===0){
                arr[i-1]++
            }
        }
        if(i>1){
            arr[i-1]++
        }
    }
    
    let limitArr = arr.map((item, index)=> item>limit? power : item)
    limitArr.forEach((item)=> {
        sum += item
    })
    return sum
}