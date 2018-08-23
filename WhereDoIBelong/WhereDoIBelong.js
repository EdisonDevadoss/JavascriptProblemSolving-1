function getIndexToIns(arr, num) {
  //Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i <= arr.length; i++) {
    if (num <= arr[i]) {
      console.log("i", i);
      return i;
    }
  }
  console.log("arr.length", arr.length);
}
getIndexToIns([40, 60, 5, 1], 55);
