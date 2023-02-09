function solution(s, n) {
  let sArr = s.split("");
  let resultArr = [];
  sArr.forEach((word) => {
    if (word.charCodeAt(0) === 32) {
      resultArr.push(word);
    } else if (word.charCodeAt(0) > 96) {
      let newWord = word.charCodeAt(0) + n;
      newWord > 122
        ? resultArr.push(String.fromCharCode(newWord - 26))
        : resultArr.push(String.fromCharCode(newWord));
    } else {
      let newWord = word.charCodeAt(0) + n;
      newWord > 90
        ? resultArr.push(String.fromCharCode(newWord - 26))
        : resultArr.push(String.fromCharCode(newWord));
    }
  });
  return resultArr.join("");
}