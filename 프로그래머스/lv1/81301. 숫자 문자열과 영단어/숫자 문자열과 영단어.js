function solution(s) {
  let arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  arr.forEach((number, index) => {
    let regAll = new RegExp(number, "g");
    s = s.replace(regAll, index.toString());
  });
  return Number(s);
}