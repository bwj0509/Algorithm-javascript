function solution(numlist, n) {
  numlist.sort(function (a, b) {
    const GabA = Math.abs(a - n);
    const GabB = Math.abs(b - n);
    if (GabA === GabB) return b - a;

    return GabA - GabB;
  });
    return numlist
}