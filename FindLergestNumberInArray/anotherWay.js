function largestOffFour(arr) {
  //You can do this!
  var maxes = [0, 0, 0];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      var currentElement = arr[i][j];
      if (currentElement >= maxes[i]) {
        console.log("maxes I", maxes[i]);
        maxes[i] = currentElement;
      }
    }
  }
  console.log(maxes);
}
largestOffFour([[4, 5, 1, 3], [13, 35, 37, 39], [1000, 1001, 857, 1]]);
