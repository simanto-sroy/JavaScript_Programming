// ForEach Method in javascript

var arr = [1,2,3,4,5]

// var sum = 0
// arr.forEach(function (value, index, arr) {
//     sum += value
// })

// console.log(arr);

// function foreach(arr, cb) {
//     for(var i = 0; i < arr.length; i++) {
//         cb(arr[i], index, arr)
//     }
// }

// foreach(arr, function(value, index, arr) {
//     console.log(value, index, arr);
// })

function foreach(arr, cb) {
    for(var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

var sum = 0;
foreach(arr, function(value, index, arr) {  
    console.log(value,index,arr);
    sum += value + 5;
})

console.log(sum);