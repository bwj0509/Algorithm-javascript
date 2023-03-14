function solution(priorities, location) {
    let docuNumArr = []
    let complete = []
    priorities.forEach((item, index)=>{
        docuNumArr.push(index+1)
    })
    
    while(priorities.length !== 0){
        if(priorities[0] === Math.max(...priorities)){ // 최대값이 맞으면
            priorities.shift()
            let temp = docuNumArr.shift()
            complete.push(temp)
        }
        else{
            let temp = priorities.shift()
            priorities.push(temp)
            temp = docuNumArr.shift()
            docuNumArr.push(temp)
        }
        
        
    }
    
    console.log(complete)
    result = complete.indexOf(location+1)+1
    console.log(result)
    return result
}


