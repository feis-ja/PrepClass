const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']

function deleteThis(element,array) {
    let copy = [...array]
    let index = array.indexOf(element)
    copy.splice(index,1)
    return copy
}
console.log(fruits)
console.log(deleteThis('Jambu',fruits))
console.log(fruits)
