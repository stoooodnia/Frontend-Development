const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]


const reformat = (obj) => {
    return obj.map((el) => {
        const { name, likes } = el;
        return { [name]: likes, age: name.length * 10 };
    })
}

console.log(reformat(myUsers))