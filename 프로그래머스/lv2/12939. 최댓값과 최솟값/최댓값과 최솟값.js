function solution(s) {

    arr = s.split(' ')
    toNumberArr = arr.map((i)=>(Number(i)))
    toNumberArr.sort(function(a,b){
        return a - b
    })

    let answer = `${toNumberArr[0]} ${toNumberArr[toNumberArr.length-1]}`
    return answer
}