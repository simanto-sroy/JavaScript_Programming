window.onload = function () {
    const inp = document.getElementById('inp');
    const nameList = document.getElementById('name-list');
    const display = document.getElementById('display');
    const giveAtry = document.getElementById('giveAtry');
    const firstGols = document.getElementById('firstGols');
    const secondGols = document.getElementById('secondGols');

    const allGols = [];

    inp.addEventListener('keypress', function (event) {
        if(event.key === 'Enter') {
            let newGols = event.target.value.split(', ')
            if(newGols[0] !== '') {
                newGols.forEach(gols => {
                    allGols.push(gols)
                    let item = createListGols(gols)
                    nameList.appendChild(item)
                    event.target.value = ''
                })
            }
        }
    })

    giveAtry.addEventListener('click', function () {
        if(allGols.length === 0) {
            alert('Please provide a goles ')
        }else {
            let suffleGoles = suffle(allGols)
            for(let i = 1; i < suffleGoles.length; i++) {
                (function (i, count){

                    setTimeout(() => {

                        let rand = Math.floor(Math.random() * (suffleGoles.length))
                        display.innerHTML = suffleGoles[rand]

                        if(count === suffleGoles.length -1) {
                            if(!firstGols.innerHTML) {
                                firstGols.innerHTML = suffleGoles[rand]
                                let ind = allGols.indexOf(suffleGoles[rand])
                                allGols.splice(ind, 1)
                            } else if(!secondGols.innerHTML) {
                                secondGols.innerHTML = suffleGoles[rand]
                                let ind = allGols.indexOf(suffleGoles[rand])
                                allGols.splice(ind, 1)
                            } else {
                                alert('Game Over!')
                            }

                        }    

                    }, i)

                })(i*100, i)
            }
        }
    })

}

function createListGols(gols) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = gols
    return li
}

function suffle(arr) {

    let suffledArr = [...arr]

    for(let i = suffledArr.length -1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = suffledArr[rand]
        suffledArr[rand] = suffledArr[i]
        suffledArr[i] = temp
    }

    return suffledArr
}

