var persons = [
    {
        name : 'A',
        age : 20
    },
    {
        name : 'B',
        age : 24
    },
    {
        name : 'C',
        age : 12
    },
    {
        name : 'D',
        age : 15
    }
]

var arr = [1,55, 4, 5, 6, -7, 8, 1, 2, -3, 4, 5, -1, -9]

arr.sort(function(a, b) {
    if(a > b) {
        return 1
    }
    else if(a < b) {
        return -1
    }
    else {
        return 0
    }
})

// console.log(arr);

persons.sort(function(a, b) {
    if(a.age > b.age) {
        return 1
    }
    else if(a.age < b.age) {
        return -1
    }
    else {
        return 0
    }
})

// console.log(persons);