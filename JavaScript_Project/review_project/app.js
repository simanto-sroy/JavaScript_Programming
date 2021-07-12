const review = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ad exercitationem eaque quam quo eos. Lorem ipsum dolor sit amet."
    },
    {
        id: 2,
        name: "smith shaha",
        job: " full-stack web developer",
        img: "https://image.shutterstock.com/image-photo/portrait-young-smiling-caucasian-man-260nw-1491969899.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ad exercitationem eaque quam quo eos. Lorem ipsum dolor sit amet."
    },
    {
        id: 3,
        name: "hm nayem",
        job: "software developer",
        img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum ad exercitationem eaque quam quo eos. Lorem ipsum dolor sit amet."
    }
];

const img = document.querySelector('.person-image');
const autor = document.querySelector('.author');
const job = document.getElementById('Job');
const info = document.querySelector('.infor');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');

//set starting item
let currentItem = 0;

//load intial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem)
})

// show person based on item

function showPerson(person) {
    const item = review[person];
    img.src = item.img;
    autor.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function () {
    currentItem++
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// show prev person

prevBtn.addEventListener('click', function () {
    currentItem--
    if(currentItem < 0){
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
})

//show random person

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * review.length);
    console.log(currentItem);
    showPerson()
})