function solution(s) {
    let index = 0;
    let word = s[0]
    let wordCount = 1;
    let anotherWordCount = 0;
    let result = [];
    
    for(let i=1; i<s.length; i++){
        if(s[i] === word){
            wordCount++
        }
        else{
            anotherWordCount++
        }
        
        if(wordCount === anotherWordCount){
            result.push(s.slice(index,i+1))
            word = s[i+1]
            index = i+1
            wordCount = 0;
            anotherWordCount = 0;
        }
    }
    if(wordCount !==0 || anotherWordCount !==0){
        result.push('count')
    }
    
    return(result.length)
}