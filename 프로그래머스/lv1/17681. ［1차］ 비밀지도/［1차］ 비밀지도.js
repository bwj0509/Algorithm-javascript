function solution(n, arr1, arr2) {
    let resultArr1 = Array(n).fill().map(()=>[])
    let cArr1 = arr1.map((item)=> item.toString(2).padStart(n,'0'))
    let cArr2 = arr2.map((item)=> item.toString(2).padStart(n,'0'))
    for(let i=0; i<n;i++){
        for(let j=0; j<n; j++){
            if(cArr1[i][j] === '1' || cArr2[i][j] === '1'){
                resultArr1[i][j] = '1'
            }
            else{
                resultArr1[i][j] = '0'
            }
        }
    }
    let resultArr2 = resultArr1.map((lineArr)=> lineArr.map((element)=>{
        if(element === '1'){
            return '#'
        }
        else{
            return ' '
        }
    })).map((lineArr)=> lineArr.join(''))
    
    return(resultArr2)
    
}