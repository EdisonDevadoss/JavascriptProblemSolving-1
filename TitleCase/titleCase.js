function titleCase(str){
  var word = str.toLowerCase().split(" ");
  for(var i=0; i<word.length; i++){
    word[i] = word[i][0].toUpperCase() + word[i].slice(1)
  }
  console.log(word.join(" "))

}
titleCase("I'm a little tea pot")
