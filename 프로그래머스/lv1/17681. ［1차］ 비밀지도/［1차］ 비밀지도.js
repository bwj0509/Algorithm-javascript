function solution(n, arr1, arr2) {
    let arr = []
    let resultArr = Array(n).fill().map(()=>[])
    for(let i=0; i<n;i++){
        arr.push((arr1[i] | arr2[i]).toString(2).padStart(n,' '))
    }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[i][j] === '1'){
                resultArr[i].push('#')
            }
            else{
                resultArr[i].push(' ')
            }
        }
    }
    return(resultArr.map((item)=> item.join('')))
}