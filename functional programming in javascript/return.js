// Return Method In JavaScript

function greet(msg){
    function sayHi(name) {
        return msg + ' ' + name;
    }
    return sayHi;
}

var gm = greet('Good Morning')
// console.log(gm);

var nm = gm('Simanto Roy')
// console.log(nm);

function base(b){
    return function(n){
        var result = 1;
        for(var i = 0; i < b; i++) {
            result *= n
        }
        return result;
    }
}

var base10 = base(10)
var result = base10(2)
// console.log(result);