function solution(operations) {
    let queue = [];
    
    operations = operations.map((operation)=> operation.split(' '))
    
    operations.forEach((op)=>{
        if(op[0] === 'I'){
            queue.push(Number(op[1]))
            queue.sort((a,b)=> a-b)
        }
        else if(op[0] === 'D' && op[1] === '-1'){
            queue.shift()
        }
        else{
            queue.pop()
        }
    })
    if(queue.length === 0 ){
        return [0,0]
    }
    return [Math.max(...queue), Math.min(...queue)]
}