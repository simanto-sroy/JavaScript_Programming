// Recursive Function In JavaScript

function sayHi(n) {
    if(n == 0) {
        return
    }

    // console.log('I am Simanto Roy');
    sayHi(n - 1)
}

// sayHi(10);

function sum(n) {
    if(n == 1) {
        return 1
    }
    return n + sum(n - 1)
}

console.log(sum(100));