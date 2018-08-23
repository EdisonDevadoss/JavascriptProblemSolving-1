function destroy(arr) {
  //return all values
  // arguments is one of the concept to display all arguments we pass in functions
  //console.log(arguments);
  var args = Array.from(arguments);
  args.splice(0, 1);
  var targets = args;

  let answer = arr.filter(function(num) {
    return targets.indexOf(num) === -1;
  });
  console.log("arr", answer);

  //another one method
  //var result = [];
  // for (var num of arr) {
  //   if (targets.indexOf(num) === -1) {
  //     result.push(num);
  //   }
  // }
  // console.log(result)
  // return result;
}
destroy([1, 2, 3, 1, 2, 3], 2, 3);
