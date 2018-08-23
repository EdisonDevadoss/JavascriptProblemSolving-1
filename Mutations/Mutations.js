// what is mutation, mutation is check whethear all the second array is exist in first array.
// if second array is exit in first array return true.
// if second array is not exit in first array return false
function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  // for (var i = 0; i < secondWord.length; i++) {
  //   if (firstWord.indexOf(secondWord[i]) === -1) return console.log(false);
  // }
  //return console.log(true);

  //another method
  // for (var letter of secondWord) {
  //   if (firstWord.indexOf(letter) === -1) return false;
  // }
  // return console.log(true);

  //Another method using includes
  for (var letter of secondWord) {
    if (!firstWord.includes(letter)) return false;
  }
  return console.log(true);
}
mutation(["Hello", "he"]);
