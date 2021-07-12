// Function In JavaScript

function functionName() {
    // console.log("I am A Function!");
}

// var Func = functionName();

for(var i = 0; i < 10; i++) {
    functionName();
}


// Function Perametars

function add(a, b) {
    var result = a + b;
    // console.log(result);
}

// add(10, 20)


var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

var sum = 0
function arraySum(arr) {
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    // console.log(sum);
}

arraySum(arr1);
arraySum(arr2);
arraySum(arr3);



//Function Arguments

function test(a, b, c) {
    // console.log(arguments);

    for(var i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);
    }
}

test(10, 20, 30);


function addAll() {
    var sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

addAll(1,3,4,5,6,7);
addAll(1,3,4,5,6,7,8,92,444444445);