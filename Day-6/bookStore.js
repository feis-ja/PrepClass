const database = {
    buku1 : 1,
    buku2 : 2,
    buku3 : 0,
    buku4 : 4,
    buku5 : 5,
}
function bookStore(nameQty) {
    let keyBuy = Object.keys(nameQty)
    let list = []
    keyBuy.forEach(val => {
        if(database.hasOwnProperty(val)){
            if(  database[val]  >= nameQty[val]){
                list.push(`${val} can be purchased`)
            }else  if( database[val]  <= nameQty[val] && database[val] > 0) {
                list.push(`${val} only ${database[val]} can be purchased`)
            }else{
                list.push(`${val} stock empty`)
            }
        }else{
            list.push(`there is no ${val} in database`)
        }
    });
    return list.join(", ")
    
}

let buy = {buku1:1,buku2:3,buku9:3,buku3:2}
console.log(bookStore(buy))

