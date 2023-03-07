function solution(survey, choices) {
    let score = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M : 0,
        A : 0,
        N : 0
    }
    let result = [];
    for(let i=0; i<survey.length; i++){
        if(choices[i] < 4){
            let baseNum = 4
            let word = survey[i][0]
            score[word] += baseNum - choices[i]
        }
        else if(choices[i]> 4){
            let baseNum = 4
            let word = survey[i][1]
            score[word] += choices[i] - baseNum
        }
    }
    
    if(score.R >= score.T){
        result.push('R')
    }
    else{
        result.push('T')
    }
    
    if(score.C >= score.F){
        result.push('C')
    }
    else{
        result.push('F')
    }
    
    if(score.J >= score.M){
        result.push('J')
    }
    else{
        result.push('M')
    }
    
    if(score.A >= score.N){
        result.push('A')
    }
    else{
        result.push('N')
    }
    return result.join('')
    
}