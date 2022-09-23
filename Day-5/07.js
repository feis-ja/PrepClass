const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']

function addStartEnd(start,end,array) {
    array.unshift(start)
    array.push(end)
    return array
}

console.log(addStartEnd("Handuk","Celana",stuff))