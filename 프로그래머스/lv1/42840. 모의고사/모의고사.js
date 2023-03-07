function solution(answers) {
    
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    
    let input_1 = [1,2,3,4,5]
    let input_2 = [2,1,2,3,2,4,2,5]
    let input_3 = [3,3,1,1,2,2,4,4,5,5]
    
    let result = []
    
    for(let i=0; i<answers.length;i++){
        input_1[i%5] === answers[i] && count1++
        input_2[i%8] === answers[i] && count2++
        input_3[i%10] === answers[i] && count3++
    }
    let max = Math.max(count1, count2,count3)
    
    count1 === max && result.push(1)
    count2 === max && result.push(2)
    count3 === max && result.push(3)
    
    return(result)
}