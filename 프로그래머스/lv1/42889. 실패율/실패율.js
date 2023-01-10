function solution(N, stages) {
  let arr = [];
  let totalLength = stages.length;
  let failRatio = [];
  for (let i = 1; i < N + 1; i++) {
    arr[i - 1] = stages.filter((stage) => stage === i).length;
  }

  for (let i = 1; i < N + 1; i++) {
    failRatio[i - 1] = { value: arr[i - 1] / totalLength, index: i };
    totalLength -= arr[i - 1];
  }

  failRatio.sort(function (a, b) {
    return b.value - a.value;
  });

  let result = failRatio.map((item) => item.index);

  return result;
}