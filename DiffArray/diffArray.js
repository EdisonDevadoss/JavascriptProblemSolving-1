function DiffArray(arr1, arr2){
    var result = [];
    for(var i=0; i< arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){
            result.push(arr1[i])
        }
       
    }
    for(var j=0; j<arr2.length; j++){
        if(arr1.indexOf(arr2[j])=== -1){
            result.push(arr2[j])
        }
    }
    console.log(result)
}

DiffArray([1,2,3,5],[1,2,3,4,5]);
//DiffArray([1,2,3],[4,3,6])

// In this example I have just two array of data. I compare two arrays. 
//If what are the data is not matched, display the data.