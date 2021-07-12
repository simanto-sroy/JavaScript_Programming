// Object Oriented Programming In JavaScript

//Object Literal Pattern

var rect = {
    width: 100,
    height: 50,

    draw: function() {
        console.log('I am rect');
        this.printProperties();
    },

    printProperties: function() {
        console.log('My Width is a ' + this.width);
        console.log('My height is a ' + this.height);
    }
}

// rect.draw();
// rect.height = 100;
// rect.draw();


var another = {
    width: 120,
    height: 320,

    print: rect.printProperties
}

// another.print()


// Factory Patern

var createRect = function(width, height) {
    return {
        width: width,
        height: height,
    
        draw: function() {
            console.log('I am rect');
            this.printProperties();
        },
    
        printProperties: function() {
            console.log('My Width is a ' + this.width);
            console.log('My height is a ' + this.height);
        }
    }
    
}

// var rect1 = createRect(10, 30)
// rect1.draw()

// var rect2 = createRect(100, 300)
// rect2.draw()


// Constructor Pattern or function

var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    
    this.draw = function() {
        console.log('I am rect')
        this.printProperties()
    },
    
    this.printProperties = function() {
        console.log('My Width is a ' + this.width)
        console.log('My height is a ' + this.height)
    }
}

// var rect3 = new Rectangle(10, 20)
// rect3.draw()


// New Keyword impelemention

function myNew(cons){
    var obj = {}
    Object.setPrototypeOf(obj, cons.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    return obj
}

// var rect4 = myNew(Rectangle, 10, 20)
// rect4.draw()



/**
 *  @Constructor Property
 */



// function test() {
//     console.log("Something");
// }


var Rect = new Function ('width', 'height', ` this.width = width
    this.height = height

    this.draw = function() {
        console.log('I am rect')
        this.printProperties()
    },

    this.printProperties = function() {
        console.log('My Width is a ' + this.width)
        console.log('My height is a ' + this.height)
    }`
) 

// var rect5 = new Rect(4, 5)
// console.log(rect5);

/**
 *  @Uderstaing Bind,Call & Apply
 */


function myFunc(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}

// myFunc.call({a: 40, b: 25}, 10, 5);
// myFunc.apply({a: 40, b: 25}, [10, 5]);

var testBind = myFunc.bind({a: 40, b: 25}, 10, 5);
// testBind()


/**
 *  @Pass By Value vs Pass Reffernce
 *  @Call By Value vs Call Reffernce
 */

var n = 10;

function change(n) {
    n = n + 190
    console.log(n);
}

// change(n)
// console.log(n);

var obj = {
    a: 10,
    b: 20,
}

function changeMe(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj);
}

// changeMe(obj)
// console.log(obj);

/**
 *  @Abstraction 
 */

 var Rectangle = function (width, height) {

    this.width = width
    this.height = height
    var position = {
        x: 56,
        y: -100,
    }
    
    var printProperties = function() {
        console.log('My Width is a ' + this.width)
        console.log('My height is a ' + this.height)
    }.bind(this)

    this.getPosition = function () {
        return position
    }

    this.draw = function() {
        console.log('I am rectangle')
        printProperties()
        console.log('Position: X = ' + position.x + ' Y = ' + position.y);
    }

    Object.defineProperty(this, 'position', {
        get: function() {
            return position
        },
        set: function(value) {
            position = value
        }
    })
}

var rect7 = new Rectangle(10,30)
rect7.draw()
rect7.position = {
    x: 320,
    y: 433
}
console.log(rect7.getPosition());