function solution(ingredient) {
    let stack= []
    let count = 0;
    
    ingredient.forEach((ingre)=>{
        stack.push(ingre)
        if(stack.length >=4 && stack[stack.length-4] === 1 && stack[stack.length-3] === 2 && stack[stack.length-2] === 3 && stack[stack.length-1] ===1){
            count +=1
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
        }
    })
    
    return(count)
}