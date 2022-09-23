function rating(int) {
	switch (true) {
		case int >= 21:
			return "DEWASA";
			break;
		case int < 21 && int >= 13:
			return "REMAJA";
			break;
		case int < 13 && int >= 9:
			return "BIMBINGAN ORANGTUA";
			break;
		case int < 9:
			return "SEMUA UMUR";
			break;

		default:
			return "error";
			break;
	}
}


console.log(rating(15))
console.log(rating(32))

