/**
 *  @Inheritance In JavaScript
 */

function Person(name) {
    this.name = name;
}

var p1 = new Person('Simanto Roy');
console.log(p1);

/**
 * @Discriptor Property
 */


var person = {
    name: 'Simanto Roy'
}

// console.log(person);

for(var i in person) {
    console.log(i);
}

// console.log(Object.keys(person));

var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor);


let baseObj = Object.getPrototypeOf(person)
let descriptor2 = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor2);

Object.defineProperty(person, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: "Simanto Roy"
})

/**
 * @instance vs @prototype
 */

function Square(width){ //instance member
    this.width = width;
    this.getWidth = function(){
        console.log('Width is ' + this.width);
        // this.draw()
    }
}

Square.prototype = { // prototype member
    draw: function() {
        this.getWidth()
        console.log(draw);
    },
    toString: function(){
        return 'My width is = ' + this.width 
    }
}


var sqr1 = new Square(20)
var sqr2 = new Square(30)