// Nested Scope

var x = 200;

function test() {
    var x = 24
    console.log(x);

    function nested(){
        var y = 55
        console.log(x);
    }

    nested()

    console.log(y);
}

test()