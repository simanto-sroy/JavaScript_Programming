// Clouser In JavaScript
function test() {
    var msg = 'I am Learning Lexical scope and closure'

    function sayMsg() {
        console.log(msg);
    }

    sayMsg()
}

// test()

function test() {
    var msg = 'I am Learning Lexical scope and closure'

    return function (){
        console.log(msg);
    }
}

// var sayMsg = test()
// console.log(sayMsg);

for(var i = 0; i < 5; i++) {
    (function(n){
        setTimeout(function () {
            console.log(n);
        },1000 * i)
    })(i)
}