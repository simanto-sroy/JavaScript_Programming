// callback function in javascript

function sample(a, b) {
    var c = a + b;
    var d = a - b;
    var result = sum(c, d);
    return result;
}

function sum(a, b) {
    return a + b;
}

// console.log(sample(12,12));

function multiply(a, b, cb) {
    var c = a + b;
    var d = a - b;
    var result = cb(c, d);
    return result;
}

function add(c, d) {
    return c * d;
}  

function division(c, d) {
    return c / d;
} 

console.log(multiply(3,9,division));