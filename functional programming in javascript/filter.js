// Filter Method In JavaScript

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var filterArray = arr.filter(function(value){
    return value % 2 === 0;
})

// console.log(filterArray);

// Filter Method Impelement

function filter(arr, cb) {
    var newArr = [];
    for(var i =0; i < arr.length; i++) {
        cb(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}

// console.log(filter(arr));

filter(arr, function(value){
    if(value % 2 == 0){
        console.log(value);
    }
})