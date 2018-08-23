function sumAll(arr) {
  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  var total = 0;
  //console.log("start and end:", start, end);
  for (var i = start; i <= end; i++) {
    total += i;
  }
  console.log(total);
  return total;
}
sumAll([4, 1]);
