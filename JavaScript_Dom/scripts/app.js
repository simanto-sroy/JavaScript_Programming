/** 
 * @Selectors
 */ 

// let title = document.getElementById('title');
// let pragraph = document.getElementsByClassName('lead')
// let lists = document.getElementsByTagName('li')
// let listItemOne = document.getElementsByName('list-item-name')


// let title = document.querySelector('#title')
// let pragraph = document.querySelectorAll('.lead')
// console.log(pragraph);

// let listItemOne = document.querySelector('[name="list-item-one"]')
// console.log(listItemOne);

// let list = document.getElementById('list')

// let parent = list.parentElement

// let children = list.children
// // console.log(children);

/**
 * @traversing
 */

// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);

// let li = document.querySelector('li')
// console.log(li.nextElementSibling);

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// let listItem = document.getElementsByTagName('li')

// let listItems = Array.from(listItem)
// let listItems = Array.prototype.slice.apply(listItem)
// let listItems = [...listItem]

// listItems.forEach( (li, ind) => {
//     let text = li.innerHTML
//     li.innerHTML = `(${ind + 1}) ${(text)}`
// })

/**
 * @Elements Create
 */

// let li = createElement('li','list-group-item','Four');
// li.setAttribute('title', 'I am fourth item')

// let list = document.getElementById('list')
// list.appendChild(li)

// function createElement(tagName, className, innerHTML) {
//     let tag = document.createElement(tagName)
//     tag.innerHTML = innerHTML || ''
//     tag.className = className || ''
//     return tag
// }

// function append(parent, children) {
//     children.forEach(child => parent.appendChild(child))
// }

// let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem aspernatur obcaecati necessitatibus laborum. Laborum nulla quidem voluptatum facilis, nemo expedita ea magnam voluptatibus numquam in nesciunt sunt veritatis soluta.')

// let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem aspernatur obcaecati necessitatibus laborum. Laborum nulla quidem voluptatum facilis, nemo expedita ea magnam voluptatibus numquam in nesciunt sunt veritatis soluta.')

// let div = createElement('div')
// append(div,[p1, p2])

// let cont = document.getElementsByClassName('container')[0].appendChild(div)

/**
 * @Insertadjacent
 */

// let list = document.getElementById('list')
// list.insertAdjacentElement('beforebegin', div)

/**
 * @Element Update & Remove
 */

// let firstChild = list.firstElementChild
// setTimeout(() =>{
//     firstChild.innerHTML = firstChild.innerHTML + '(Modified)'
//     firstChild.classList.add('text-danger');
//     firstChild.style.backgroundColor = 'black'
// },5000)

// // setTimeout(() =>{
// //     list.lastChild.remove()
// // },3000)

// let lastItem = list.lastElementChild.cloneNode(true);
// lastItem.innerHTML = 'Five'
// list.appendChild(lastItem)

/**
 * @Attribute
 */

// console.log(list.attributes);
// console.log(list.getAttributeNames());
// console.log(list.getAttributeNode('class'));
// console.log(list.getAttribute('id'));
// console.log(list.getAttribute('id'));

// console.log(list.classList);
// console.log(list.classid);
// console.log(list.className);

// lastItem.id = 'last-item'

/**
 * @DOM_STYLE
 */

// let title = document.getElementById('title');
// // console.log(title.style);

// // title.style.color = 'orange';
// // title.style.fontSize = '4rem'
// // title.style.background = '#111'\

// let styleObj = {
//     background: '#111',
//     fontSize: '30px',
//     color: '#efefef'
// }

// let lists = document.getElementById(list);
// [...list.children].forEach(li => {
//     Object.assign(li.style, styleObj)
// })


// /**
//  * @Eevent_Handeling
//  */

// let btn = document.getElementById('btn')

// // console.dir(btn)

// // btn.onclick = function(e) {
// //     console.log(e);
// // }

// let liste = document.getElementById('list')


// btn.addEventListener('click', function(e){
//     let item =  liste.lastElementChild.cloneNode(true)
//     item.innerHTML = 'New Item'
//     list.appendChild(item)
// });

// // Event Delegation Problem
// // [...liste.children].forEach(li => {
// //     li.onclick = function (e) {
// //         e.target.remove()
// //     }
// // })

// liste.addEventListener('click', function(e) {
//     if(this.contains(e.target)){ 
//         e.target.remove()
//     }
// })

// let box = document.getElementById('box')

// box.addEventListener('mousemove', function (e) {
//     document.getElementById('x-value').innerHTML = e.offsetX
//     document.getElementById('y-value').innerHTML = e.offsetY
//     if(e.offsetY === 50 && e.offsetX === 50){
//         alert('50 50')
//     }
// })

let name = document.getElementById('name')
// console.log(name);

name.addEventListener('keypress',  function (e) {
    if(event.key === 'Enter') {
        document.getElementById('showName').innerHTML = `Your Name is ${event.target.value}` 
        event.target.value = ' '
    }
})

let skills = document.getElementsByName('skills');
let result = document.getElementById('result');

let chackedSkills = [];

[...skills].forEach(sk => {
    sk.addEventListener('change', function(e) {
        if(e.target.checked){
            chackedSkills.push(e.target.value)
            outputSkills(result, chackedSkills)
        }else {
            let ind = chackedSkills.indexOf(e.target.value)
            chackedSkills.splice(ind, 1)
            outputSkills(result, chackedSkills)
        }
    })
})


function outputSkills(parent, skills) {
    let result = [];
    skills.forEach((skill, index) => {
        result += `${index + 1}: ${skill}  `
    })
    parent.innerHTML = result
}

let listse = document.getElementById('list')

listse.addEventListener('dblclick', function(e) {
    if (this.contains(event.target)){
        let innerText = event.target.innerText
        event.target.innerHTML = ''
        let inputBoxs = createInputBox(innerText)
        event.target.appendChild(inputBoxs)

        inputBoxs.addEventListener('keypress', function (e) {
            if(e.key === 'Enter') {
                event.target.innerHTML = e.target.value
            }
        })
    }
})

// list.addEventListener('click', function(e) {
    
// })

function createInputBox(value) {
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.className = 'form-control'
    inp.value = value

    return inp
}
