function repeatStringNumTimes(str, num) {
  //in this example we are return string value number of times.
  //We can choose how many time return the string
  if (num < 0) return "";
  return str.repeat(num);
}
//repeatStringNumTimes("abc", 3);

//console.log("hello".repeat(4));

///This is the method using for loop
function repeatStringNumTimes(str, num) {
  //in this example we are return string value number of times.
  //We can choose how many time return the string
  var final = "";
  if (num < 0) return "";
  for (var i = 0; i < num; i++) {
    final += str;
  }
  console.log(final);
}
//repeatStringNumTimes("Edison ", 4);

//Another one method

function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  if (num === 1) return str;//base case
  let string = str + repeatStringNumTimes(str, num - 1);
  console.log(string);
}

repeatStringNumTimes("eddy ", 3);
