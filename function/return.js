/*
     Return In Function
*/ 

function addAll() {

    var sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;

}

var resultAddAll = addAll(23,233);
// console.log(resultAddAll);

function person(name, email) {
    return  {
        name: name,
        email: email
    }
}

var userDetails = person('Simanto Roy','sroy38705@gmail.com')
console.log(userDetails);