function confirmEnding(str, target) {
  // if (str.endsWith(target)) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }

  if(str.substr(-target.length)===target){
    console.log(str.substr(-target.length), -target.length, true)
  }else {
    console.log(false)
  }
}
confirmEnding("Edison", "n");

//substr learning
// var sentence = "I'm running home in 5 minutes.";
// console.log(sentence.substr(4))
