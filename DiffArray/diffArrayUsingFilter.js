function DiffArray(arr1, arr2){
    // Now I going to combine my two array.
    var combo = arr1.concat(arr2);
    
    return combo.filter((num)=>{
        if(arr1.indexOf(num) === -1 || arr2.indexOf(num)=== -1){
            console.log(num)
        }
    })
}


//DiffArray([1,2,3,5],[1,2,3,4,5]);
DiffArray([1,2,3],[4,3,6])