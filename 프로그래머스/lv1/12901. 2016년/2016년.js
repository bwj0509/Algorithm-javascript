function solution(a, b) {
    const dayArr = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let day = new Date(`2016-${a}-${b}`).getDay()
    return(dayArr[day])
}