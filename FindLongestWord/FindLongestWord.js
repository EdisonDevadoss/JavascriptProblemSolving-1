function findLongestWord(str){
    var words = str.split(" ");
    var longest = "";
    for(var word of words){
    if(word.length > longest.length) longest = word;  
    
    }
    console.log(longest)
}
findLongestWord("The quick brown fox jumped over the lazy dog");