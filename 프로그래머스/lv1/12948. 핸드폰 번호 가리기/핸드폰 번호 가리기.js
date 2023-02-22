function solution(phone_number) {
    let numberArr = phone_number.split('')
    let lastNumber = numberArr.splice(phone_number.length-4, 4)
    let result = numberArr.fill('*').join('') + lastNumber.join('')
    return result
}