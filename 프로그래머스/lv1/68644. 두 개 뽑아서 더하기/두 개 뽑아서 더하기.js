function solution(numbers) {
    let arr = [];
    for(let i=0;i<numbers.length;i++){
        for(let j=0; j<numbers.length;j++){
            if(i!=j){
                let num = numbers[i]+numbers[j]
                arr.push(num)
            }
        }
    }
    let newArr = [...new Set(arr)]
    newArr.sort((a,b)=> a-b)
    return newArr
}