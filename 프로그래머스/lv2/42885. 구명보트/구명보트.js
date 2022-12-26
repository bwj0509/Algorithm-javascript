function solution(people, limit) {
    people.sort(function (a, b) { return b - a })

    let boatQuan = 0
    let l = 0
    let r = people.length - 1
    while (l <= r) {
        let sum = people[l] + people[r]
        if (sum > limit) {
            boatQuan++
            l++
        }
        else {
            boatQuan++
            l++
            r--
        }

    }
    return boatQuan
}