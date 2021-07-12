//First Class Function In JavaScript

/*

    First Class Function Maintain 6 Rules

    1. A function can be stored in a  variable

    2. A function can be stored in a array

    3. A function can be stored in a object

    4. We Can Create function as you need

    5. We Can Pass function as an arguments

    6. We Can return function from another Function

*/

function add(a, b) {
    return a + b;
}

// 1. A function can be stored in a  variable

var sum = add
console.log(sum(4,5));

// 2. A function can be stored in a array

var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](10, 5));

// 3. A function can be stored in a object

var obj = {
    sum : add
}
console.log(obj);
console.log(obj.sum(7,8));

// 4. We Can Create function as you need

setTimeout(function() {
    console.log('I have created!');
}, 500)

// 5. We Can Pass function as an arguments

// 6. We Can return function from another Function

