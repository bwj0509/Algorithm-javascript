function solution(X, Y) {
    let xArr = Array(10).fill(0)
    let yArr = Array(10).fill(0)
    for(let i=0; i<X.length; i++){
        xArr[X[i]]++
    }
    for(let i=0; i<Y.length; i++){
        yArr[Y[i]]++
    }
    
    
    let resultArr = xArr.map((num, index)=> Math.min(num,yArr[index] ) )
    
    let numArr = [];
    
    resultArr.forEach((num, index)=> {
        for(let i=0; i<num; i++){
            numArr.push(index)
        }
    })
    
    numArr.sort((a,b)=> b-a)
    
    if(numArr.length===0){
        return "-1"
    }
    else if(numArr[0] === 0){
        return '0'
    }
    else{
        return numArr.join('').toString()
    }
    
    
}