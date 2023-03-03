function solution(nums) {
    let num = nums.length /2
    let newNum = [...new Set(nums)].length
    return num<=newNum? num: newNum
}