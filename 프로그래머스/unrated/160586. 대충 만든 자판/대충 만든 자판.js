function solution(keymap, targets) {
    
    let result = Array(targets.length).fill(0)
    
    for(let i=0; i<targets.length;i++){
        for(let j=0; j<targets[i].length ; j++){
            let indexs = []
            keymap.forEach((key)=> {
                if(key.indexOf(targets[i][j]) >= 0){
                    indexs.push(key.indexOf(targets[i][j])+1)
                }
            })
            if(indexs.length === 0){
                result[i] = -1
                break;
            }
            result[i]+= Math.min(...indexs)
        }
        
    }return(result)
}