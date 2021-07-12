let fact = document.getElementById('fact');
let factText = document.getElementById('factText');
let numberInput = document.getElementById('numberInput')

numberInput.addEventListener('input', getFactFetch);

// function getFactAjax() {
//     let number = numberInput.value

//     const URL = 'http://numbersapi.com/11' + number;
    
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET',URL)

//     xhr.onload = function() {
//         if(this.status == 200 && number!=''){
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }

//     xhr.send()
// }

function getFactFetch(){
    let number = numberInput.value;

    const URL = 'http://numbersapi.com/11' + number;

    fetch(URL)
        .then(res => res.text())
        .then(data => {
            if(number != ''){
                fact.style.display = 'block';
                factText.innerText = data
            }else {
                fact.style.display = 'none';
            }
        })
        .catch(e => console.log(e.message))

}