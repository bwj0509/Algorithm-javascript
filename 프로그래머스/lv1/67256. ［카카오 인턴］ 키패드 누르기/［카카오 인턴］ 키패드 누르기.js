function solution(numbers, hand) {
    let left_position = '*'
    let right_position = '#'
    let result = []
    let coordinate = {
        '1':[1,1],
        '2':[1,2],
        '3':[1,3],
        '4':[2,1],
        '5':[2,2],
        '6':[2,3],
        '7':[3,1],
        '8':[3,2],
        '9':[3,3],
        '*':[4,1],
        '0':[4,2],
        '#':[4,3]
    }
    
    numbers.forEach((number)=>{
        if(number === 1 || number === 4 || number === 7){
            left_position = number
            result.push('L')
        }
        else if(number === 3 || number === 6 || number === 9){
            right_position = number
            result.push('R')
        }
        else{
            let target = coordinate[number]
            let dif_left = dif(target,coordinate[left_position] )
            let dif_right = dif(target,coordinate[right_position])

            if(dif_left> dif_right){
                right_position = number
                result.push('R')
            }
            else if(dif_right > dif_left){
                left_position = number
                result.push('L')
            }
            else{
                if(hand === 'right'){
                    right_position = number
                    result.push('R')
                }
                else{
                    left_position = number
                    result.push('L')
                }
            }
        }
    })
    return(result.join(''))
}

const dif = (a,b)=>{
    let distance = Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1])
    return distance
}