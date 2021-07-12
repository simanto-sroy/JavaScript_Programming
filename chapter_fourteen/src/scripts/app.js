/**
 * @data_structure
 */

import Reactangle from './React';

`use strict`

// set data structure

let set = new Set([1, 2, 3, 4, 5]);
set.add(6)
set.add(7)
// set.clear()

// // console.log(set);
// console.log(set.has(5));

// let keyIterators = set.keys();
// console.log(keyIterators.next());

//Map data structure

let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

map.set('d', 40)
map.delete('c')
// console.log(map);

// for(let [k, v] of map) {
//     console.log(k, v);
// }

/**
 * @weak_set
 */

let a = {a: 10}, b = {b: 20}

// let set = new Set();


// let weakSet = new WeakSet([a, b]);
// console.log(weakSet)

/**
 * @weak_map
 */

let weakMap = new WeakMap([[a, 45], [b, 75]])


/**
 * @JavaScript_Class
 */

class Reactangle {

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    draw() {
        console.log('Drawing...');
    }

}

// let rect1 = new Reactangle(40, 50)
// console.log(rect1);

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    print() {
        console.log(this.name, this.email);
    }

    static create(str) {
        let person = Json.parse(str);
        return new Person(person.name, person.email)
    }
}

// let str = '{"name" : "Simanto Roy", "email" : "sroy@gmail.com"}'

// let p1 = Person.create(str)
// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print()

//this property in the function

function Shape() {
    this.draw = function () {
        console.log(this);
    }
}

let s1 = new Shape();
let anotherDraw = s1.draw
anotherDraw();

//Private Method

const _radius = Symbol()
const _name = Symbol()

class Circle {
    constructor(radius, name) {
        this[_radius] = radius;
        this[_name] = name;
    }

    draw() {
        console.log('Drawing.....');
    }
}

// let c1 = new Circle(3)

const _radius = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle {
    constructor(radius, name) {
        _radius.set(this, radius)
        _radius.set(this, name)
        _resize.set(this, () => {
            console.log(this.size);
        })
    }

    get radius () {
        return _radius.get(this)
    }

    set radius (v) {
        _radius.set(this, v)
    }

    draw() {
        console.log('Drawing.....');
        console.log(_radius.get(this), _name.get(this));
        _resize.get(this)()
    }
}

// let c1 = new Circle(2, 'CRED')
// c1.draw()
// c1.radius()
// console.log(c1.radius);

// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//     draw() {
//         console.log('Drawing...');
//     }
// }

// class Reactangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width;
//         this.height = height;
//     }

//     draw () {
//         console.log('Drawing a Reactangle');
//     }

//     calculate() {
//         return this.width = this.width
//     }
// }


let r = new Reactangle('green',4, 5)
console.log(r);