function tahunKabisat(int) {
    if(int % 400 == 0){
        return "Kabisat"
    }else if (int % 100 == 0) {
        return "Bukan kabisat"
    }else if (int % 4 == 0) {
        return "Kabisat"
    }else{
        return "Bukan kabisat"
    }
}
console.log(tahunKabisat(1900))
console.log(tahunKabisat(2000))
console.log(tahunKabisat(2001))
console.log(tahunKabisat(2016))