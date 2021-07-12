let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let formData = {};
    [...this.elements].forEach(el => {
        if(el.type !== 'submit'){
            formData[el.name] = el.value;
        }
    })
    console.log(formData);
    this.reset();
})



let load = document.getElementById('load');
let postList = document.getElementById('posts')

const URL = 'https://jsonplaceholder.typicode.com/posts'

load.addEventListener('click', function () {
    fetch(URL)
        .then(res => res.json())
        .then(posts => {
            posts.forEach((post, ind) => {
                let listItem = listItemGenarator(post, ind + 1)
                postList.appendChild(listItem)
            })
        })
        .catch(err => {
            console.log(err.message);
        })
    
})

function listItemGenarator (item, nm) {
    let li = document.createElement('li')
    li.className = "list-group-item"
    li.innerHTML = `${nm}. ${item.title}`

    return li
}

let postFrom = document.getElementById('post-form');
let posts = document.getElementById('posts');

const URL = 'https://jsonplaceholder.typicode.com/posts'

postFrom.addEventListener('submit', function (e) {
    e.preventDefault();

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if(title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type' : 'Application/json'
            },
            body: JSON.stringify(postObj)
        })
        .then(res => res.json())
        .then(data => {
            let item = listItemGenarator(data)
            posts.appendChild(item)
            this.reset()
        })
        .catch(e => console.log(e.message))

    }else {
          alert('Please Provide Every Details')  
    }

})


function listItemGenarator (item, nm) {
    let li = document.createElement('li')
    li.className = "list-group-item"
    li.innerHTML = `${nm}. ${item.title} By User Id - ${item.userId}`

    return li
}