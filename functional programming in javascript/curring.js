//JavaScript Curring

function currying(a) {
    return function(b) {
        return function(c){
            return a + b + c;
        }
    }
}

var result = currying(5)(10)(12)
console.log(result);