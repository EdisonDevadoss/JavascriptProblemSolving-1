function chunArrayInGroup(arr, size) {
  //Break it up.
  var groups = [];
  while (arr.length > 0) {
    groups.push(arr.splice(0, size));
    //arr = arr.slice(size)
  }
  console.log(groups);
  return groups;
}
chunArrayInGroup(["a", "b", "c", "d"], 3);
