function ganjilGenap(int) {
    if(int % 2 == 0 ){
        return "Genap"
    }else if (int % 2 == 1) {
        return "Ganjil"
    }
}
console.log(ganjilGenap(43))
console.log(ganjilGenap(1032))