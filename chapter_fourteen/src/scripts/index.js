import '../styles/index.scss'

function add(a, b) {
    return a + b;
}

// let add = (a, b) =>  a + b;
// // console.log(add(30,20));

// let sqr = x => x * x

let obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function () {
        let currentValue = this.start
        const self = this
        return {
            next(){
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue ++
                }
            }
        }
    }
}

// // for(let v of obj) {
// //     console.log(v);
// // }

let iterate = obj[Symbol.iterator]()
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

// // let a = 20, b= 20

let obj = {
    a,
    b,
    print () {
        console.log(this);
    }
}

// // obj.print()
// // console.log(obj);

/**
 * @Destructures 
 */


const Person = {
    name: 'Simanto ROy',
    email: 'sroy38705@gmail.com',
    adress: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

// let {name, email, adress, adress: {city, country}} = Person
// // console.log(name, email, country);

let arr = [1,2,3,4,5]
let [first, second, third, fourth] = arr

// console.log(first, second, third, fourth);

var obj = {
    a: 20,
    b: 30,
}

// console.log(Object.entries(obj));

var objArr = [
    ['a', 10],
    ['b', 20]
];

// console.log(Object.fromEntries(objArr));

/**
 * @create a symbole
 */

let s1 = Symbol()
let s2 = Symbol('Test Symbol')

// console.log(s1);
// // console.log(s2);

// let loss = {
//     HEAD: Symbol('HEAD'),
//     TAIL: Symbol('TAIL')
// }


/**
 * @iterator
 */

const arr = [1, 2, 3]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


function createIterator(collection) {
    let i = 0;
    return {
        next(){
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}

let iterate = createIterator(arr)

let iterate = arr[Symbol.iterator]()

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// console.log(arr[Symbol.iterator]);
// console.log("simanto"[Symbol.iterator]);

let str = 'TEXT'
let iterateText = str[Symbol.iterator]

// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());

/**
 * @for of loop
 */

for(let v of arr) {
    // console.log(v);
}

for(let v of 'Smanto Roy'){
    // console.log(v);
}

let obj = {
    a: 20,
    b: 30
}

// for(let v of obj) {
//     console.log(v);
// }


/**
 * @Generator
 */

const obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function* () {
        let currentValue = this.start
        while(currentValue < this.end) {
            yield currentValue++
        }
    }
}

let iterate = obj[Symbol.iterator]()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());


function* generate() {
    yield 1
    yield 2
    yield 3
}

let it = generate()
console.log(it);