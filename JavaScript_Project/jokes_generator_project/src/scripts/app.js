let form = document.getElementById('search-form')
let number = document.getElementById('number').value
let output = document.getElementById('output')
let result = ''

form.addEventListener('submit', function(e){

    const URL = `http://api.icndb.com/jokes/random/${number}`

    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true)
    xhr.onload = function () {
       if(this.status === 200){
        const response = JSON.parse(this.responseText);
        if(response.type === 'success' && number != '') {
          response.value.forEach(function (joke) {
              result += `<div class="alert alert-success">${joke.joke}</div>`;
          })
        }else {
            result += `<div class="alert alert-danger">Something Went Wrong!</div>`
        }

        output.innerHTML = result;
       }
    }

    xhr.send()

    e.preventDefault();
})