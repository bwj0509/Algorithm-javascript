function solution(quiz) {
  let resultArr = [];
  for (let i = 0; i < quiz.length; i++) {
    let s = quiz[i];
    s = s.split(" ");

    if (s[1] === "-") {
      isTrue = Number(s[0]) - Number(s[2]) === Number(s[4]);
      resultArr.push(isTrue ? "O" : "X");
    } else {
      isTrue = Number(s[0]) + Number(s[2]) === Number(s[4]);
      resultArr.push(isTrue ? "O" : "X");
    }
  }

  return resultArr
}