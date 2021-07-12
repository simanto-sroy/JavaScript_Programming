//Scope in JavaScript Function

var a = 'sroy'

if(false) {
    // console.log(a);
}

function x() {
    var a = 20;
    function y() {
        var b = 30;
        // console.log(b);
        // console.log(a);
    }
    // console.log(a);
    y();
}
x();

function test(n) {

    function a(){
        return n % 3 === 0;
    }

    function b() {
        return n % 5 === 0;
    }

    if(a() && b()) {
        console.log(n + ' is divisible by both 3 and 5');
    }else {
        console.log('Not a valid number');
    }
}

test(15)