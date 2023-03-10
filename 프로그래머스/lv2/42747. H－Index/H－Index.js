function solution(citations) {
    let answers = 0;
    citations.sort((a,b)=> b-a)
    for(let i=0; i<citations.length; i++){
        if(i < citations[i]){
            answers++
        }
    }
    
    return answers
}



//[3, 0, 6, 1, 5]	3