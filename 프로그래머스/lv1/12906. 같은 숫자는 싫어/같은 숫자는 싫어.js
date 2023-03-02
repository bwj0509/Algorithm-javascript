function solution(arr)
{
    let resultArr = [];
    arr.forEach((element)=> {
        if(resultArr[resultArr.length-1] !== element){
            resultArr.push(element)
        }
    })
    return(resultArr)
}