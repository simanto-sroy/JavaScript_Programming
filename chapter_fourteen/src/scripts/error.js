/**
 * @Error_Handling in JavaScript
 */

// let n = 10;

// if(n > 5) {
//     // throw new Error('N is Grater Than Five')
// }

// let n = Number.parseInt('24.433')

 function changeToIn (v) {
     let result = Number.parseInt(v)
     if(!result) {
         console.log('Please Provide a value which is able to convert in Integer');
         return
     }
     return result;
 }

 let result = changeToIn('88.43')
//  console.log(result);

class CustomError extends Error {
    constructor(message) {
        super(message)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError)
        }
    }
}




function makeWords (text) {
    try {
        let str = text.trim();
        let words = str.split(' ')
        // throw new Error('I am Your Error')
        return words

    } catch(err) {
        console.log(err.message);
    }finally {
        console.log('I am Finally Block');
    }
}

let words = makeWords('          I am Simanto Roy    ')
console.log(words);