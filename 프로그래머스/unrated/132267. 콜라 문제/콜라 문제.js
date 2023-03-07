function solution(a, b, n) {
    
    let getCola = 0;
    let hasCola = n;
    
    while(hasCola >= a){
        getCola += parseInt(hasCola / a)*b
        hasCola = (hasCola % a) + parseInt(hasCola / a)*b
        
    }
    return getCola
}