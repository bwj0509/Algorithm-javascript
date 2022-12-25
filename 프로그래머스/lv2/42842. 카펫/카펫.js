function solution(brown, yellow) {
    let answer = []
    let sum = brown + yellow

    for (let height = 3; height <= brown; height++) {
        let weight = sum / height
        if ((weight - 2) * (height - 2) === yellow) {
            
            return [weight, height]
        }
    }
}