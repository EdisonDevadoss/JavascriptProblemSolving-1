function largestOffFour(arr) {
  //You can do this!
  var maxes = [];
  for (var i = 0; i < arr.length; i++) {
    var tempMax = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      var currentElement = arr[i][j];
      if (currentElement >= tempMax) {
        tempMax = currentElement;
      }
      //console.log(arr[i][j]);
    }
    maxes.push(tempMax);
  }
  console.log(maxes);
}
largestOffFour([[4, 5, 1, 3], [13, 35, 37, 39], [1000, 1001, 857, 1]]);
