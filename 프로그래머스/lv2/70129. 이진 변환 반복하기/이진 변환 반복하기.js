function solution(s) {
    let removeZeroCount = 0
    let repeatCount = 0

    while(s!=='1'){
        repeatCount += 1
        let prevLength = s.length
        s = s.split('0').join('')
        let afterLength = s.length

        removeZeroCount += prevLength - afterLength

        s = s.length.toString(2)
    }
       
    return([repeatCount, removeZeroCount])
}