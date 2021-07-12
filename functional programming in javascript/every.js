// Every Method In JavaScript

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var res1 = arr.every(function(value){
    return value % 2 == 0;
})

console.log(res1);

var res2 = arr.every(function(value){
    return value > 0;
})

console.log(res2);

var res3 = arr.some(function(value){
    return value % 2 == 1;
})

console.log(res3);

var res3 = arr.some(function(value){
    return value < 0;
})

console.log(res3);