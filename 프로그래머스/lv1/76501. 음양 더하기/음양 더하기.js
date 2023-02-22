function solution(absolutes, signs) {
    let result = 0;
    absolutes.forEach((item, index)=> {
        if(signs[index]===true){
            result += item
        }
        else{
            result += Number(`-${item}`)
        }
    })
    return result
    
}