function solution(t, p) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    arr.push(Number(t.substr(i, p.length)));
  }
  arr.forEach((item) => item <= Number(p) && count++);
  return count;
}