// Asynchronous In JavaScript

// function sayMyName(name) {
//     // setTimeout(function() {
//     //     console.log(name);
//     // },500)

//     let result 
//     setTimeout(function() {
//         result = name;
//     })

//     return result;
// }


// console.log(sayMyName('Simanto Roy'));

/**
 * @Ajax 
 */

// const xhr = new XMLHttpRequest();
// const URL = 'https://jsonplaceholder.typicode.com/users'
// xhr.open('GET', URL)

// xhr.onreadystatechange = function(e) {
//     if (xhr.readyState === 4) {
//         if(xhr.status === 200) {
//             let users = JSON.parse(xhr.responseText);
//         }
//     }
// }

// xhr.send()


// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url)

//     xhr.onreadystatechange = function(e) {
//         if (xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 let response = JSON.parse(xhr.responseText);
//                 callback(null, response)
//             }else {
//                 callback(xhr.status, null)

//             }
//         }
//     }

//     xhr.send()

// }

// getRequest('https://jsonplaceholder.typicode.com/users', (err,res) => {
//     if(err) {
//         // console.log(err);
//     }else {
//         // console.log(res);
//         // res.forEach(r => console.log(r.name));
//     }
// });

// getRequest('https://jsonplaceholder.typicode.com/posts', (err,res) => {
//     if(err) {
//         // console.log(err);
//     }else {
//         // console.log(res);
//         // res.forEach(r => console.log(r.title));
//     }
// })



// let arr = [1, 2, 3, 4, 5];

// let sqrArr = arr.map(v => v * v)

// console.log(sqrArr);

// function asyncMap(arr, cb) {
//     return arr.map(v => {
//         setTimeout(cb.bind(null, v), 0)
//     })
// }

// let qbArr = asyncMap(arr, v =>{
//     console.log(v);
// })
// console.log(qbArr);

// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url)

//     xhr.onreadystatechange = function(e) {
//         if (xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 let response = JSON.parse(xhr.responseText);
//                 callback(null, response)
//             }else {
//                 callback(xhr.status, null)

//             }
//         }
//     }

//     xhr.send()

// }

// const BASE_URL = 'https://jsonplaceholder.typicode.com'

// getRequest(`${BASE_URL}/posts/1`, (err, res) => {
//     if(err){
//         throw new Error('Error Occurred!')
//     }

//     let {userId} = res

//     getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
//         if(err) {
//             throw new Error('Error Occurred!')
//         }

//         getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) => {
//             if(err) {
//                 throw new Error('Error Occurred!')
//             }

//             console.log(res);

//         })
//     })
// })

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'TEST VALUE')
// })

// async function myFunc() {
//     let v = await p1
//     console.log('Hello');
// }

// myFunc();

async function fetchData() {
    try {
        let url = await fetch('https://jsonplaceholder.typicode.com/users')

        let data = await url.json()

        let result = data.map(m => m.name)
        console.log(result);
    }
    catch (e) {
        console.log(e.message);
    }
}

fetchData()

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll() {
    let result = await Promise.all(promises)
    console.log(result);
}

promiseAll()

let asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if(i < 5) {
                    return Promise.resolve({
                        value: i++,
                        done: false,
                    })
                }
                else {
                    return Promise.resolve({
                        done: true,
                    })
                }
            }
        }
    }
}

let iterate = asyncIterable([Symbol.asyncIterator])();

// console.log(iterate.next());

// (async function() {
//     console.log(await iterate.next());
// })()

// (async function() {
//     for await (let v of asyncIterable()){
//         console.log(v);
//     }
// })()

/**
 * @async_genarator
 */

async function* asyncGenerator(){
    let i = 0;

    while (true){
        if(i > 5) return 
        
        yield await Promise.resolve(i++)
    }

}

;(async function() {
    for await (let v of asyncGenerator()){
        console.log(v);
    }
})()
