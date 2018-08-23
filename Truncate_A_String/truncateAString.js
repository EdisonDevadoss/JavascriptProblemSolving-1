function truncateString(str, num){
  if(num <=10){
  let value =  str.slice(0, num) + "...";
  console.log(value);
}
}

truncateString("I can do all things, through christ who strengthen me!", 10);
