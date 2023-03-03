function solution(nums) {
    let count = 0
    let sumArr = []
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<i;j++){
            for(let k=0; k<j;k++){
                sumArr.push(nums[i] + nums[j]+ nums[k])
            }
        }
    }
    sumArr.forEach((element)=>{
        if(checkPrime(element)){
            count += 1
        }
    })
    return(count)
}


const checkPrime = (num)=>{
    for(let i=2; i<num;i++){
        if(num % i === 0)
            return false
    }
    return true
}