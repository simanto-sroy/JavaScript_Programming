/**
 * @Inheritance
 */

function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color
}

Shape.prototype.common =  function (){
        console.log('I am common Method');
    }


function Square(width, color){
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function (){
    console.log('Drawing');
}

// var s1 = new Square(29)
var shape = new Shape()
var sqr = new Square(45, 'green')

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

Circle.prototype.common = function () {
    // Shape.prototype.common.call(this)
    console.log('I am Calling From Circle and I have Overridden');
}

Square.prototype.common = function (){
    console.log('I am calling From Square and I have Overridden');
}

// var c = new Circle(3, 'Black')
// var s = new Shape('pirple')

// var shapes = [s,c,sqr]
// for(var i of shapes){
//     i.common()
// }



/**
 * @ResetConstructor After @inheritance
 */

//  Square.prototype = {
//     test: function() {
//         console.log('I am Test');
//     }
// }

/**
 * @Polymorphisom
 */

//  var shapes = [s,c,sqr]
//  for(var i of shapes){
//      i.common()
//  }


 /**
  * @inheritance mixin @composition
  */

    function mixin(target, ...sources) {
        Object.assign(target, ...sources);
    }


 var canWalk = {
     walk:function(){
         console.log('Walking....');
     }
 }

 var canEat = {
     eat: function(){
         console.log('Eating.....');
     }
 }

 var canSwim = {
     swim: function(){
         console.log('swiming...');
     }
 }

//  var person = Object.assign({}, canWalk, canEat);
//  person.name = 'Simanto ROy'


function Person(name) {
    this.name = name;
}

// Object.assign(Person.prototype,canWalk,canEat);

mixin(Person.prototype, canWalk, canEat);
var person = new Person('Simanto Roy')
 console.log(person);

 function GoldFish(name) {
     this.name = name;
 }

 mixin(GoldFish.prototype, canWalk, canEat)

 var fish = new GoldFish('bla bla bla')
 console.log(fish);
