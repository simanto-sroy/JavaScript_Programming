// Fetch Api In JavaScript

const BASE_URL = 'https://jsonplaceholder.typicode.com'

fetch(`${BASE_URL}/users/1`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    })


