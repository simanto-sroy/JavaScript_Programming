// Map Method In JavaScript

var arr = [1, 2, 3, 4, 5];

var sqrArr = arr.map(function(value, index, arr){
    // return Math.random() *100
    return value * value
})

// console.log(arr);
// console.log(sqrArr);

//Map Mehtod Impelement 

function myMap(arr, cb) {
    var newArry = [];
    for(var i=0; i<arr.length; i++){
        var temp = cb(arr[i], i, arr)
        newArry.push(temp)
    }
    return newArry;
}

// console.log(myMap(arr));

var sqr = myMap(arr, function(value){
    return value * value * value;
})

var mten = myMap(arr, function(value){
    return value * 10;
})

// console.log(arr);
// console.log(sqr);
// console.log(mten);