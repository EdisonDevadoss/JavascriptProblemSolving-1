function bouncer(arr) {
  //Do not show a false ID to this bouncer
  var truthies = [];
  for (var elem of arr) {
    if(elem){
      truthies.push(elem)
    }
  }
  console.log(truthies)
}
bouncer([7, "ate", "", false, 9]);
