// JavaScript Promise API

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, "One")
// })

// console.log(promise1);

// promise1.then((v)=>{
//     console.log(v);
// }).catch((e)=>{
//     console.log(e);
// })

// function getIphone(isPased) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isPased){
//                 console.log('I have got an I phone');
//             }else{
//                 console.log(new Error('I am failed'));
//             }
//         },2000)
//     })
// }

// getIphone(false)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((e) => {
//         console.log(e.message);
//     })

    function getRequest(url) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
    
        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = function(e) {
                if (xhr.readyState === 4) {
                    if(xhr.status === 200) {
                        let response = JSON.parse(xhr.responseText);
                        resolve(response);
                    }else {
                        reject(new Error('Error Occurred'))
                    }
                }
            }
    
            xhr.send()
            
        })
    }
    
    let result = getRequest(`${BASE_URL}/users/1`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err.message);
        })
    
// promise method

{
    promise.all
    promise.resolve
    promise.reject
    promise.race
}