function solution(d, budget) {
  d.sort(function (a, b) {
    return a - b;
  });
  let count = 0;
  d.forEach((department) => {
    if (budget - department >= 0) {
      budget -= department;
      count += 1;
    }
  });
  return count;
}