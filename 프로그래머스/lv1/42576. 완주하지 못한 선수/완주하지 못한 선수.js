function solution(participant, completion) {
    let a = participant.sort()
    let b = completion.sort()
    console.log(a,b)
    let result = '';
    for(let i=0; i<a.length; i++){
        if(a[i] !== b[i]){
            result = a[i]
            break;
        }
    }
    
    return result
}