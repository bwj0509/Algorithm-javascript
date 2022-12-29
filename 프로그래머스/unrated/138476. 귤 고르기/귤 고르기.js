function solution(k, tangerine) {
  let sum = 0;
  let result = {};
  tangerine.forEach((t) => (result[t] = (result[t] || 0) + 1));
  let tArr = Object.values(result).sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < tArr.length; i++) {
    sum += tArr[i];
    if (sum >= k) {
      return i + 1;
    }
  }

  console.log(tArr);
}