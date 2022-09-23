function nilai(int) {
	switch (true) {
		case int >= 90:
			return "A";
			break;
		case int < 90 && int >= 80:
			return "B";
			break;
		case int < 80 && int >= 70:
			return "C";
			break;
		case int < 70 && int >= 60:
			return "D";
			break;
		case int < 60:
			return "E";
			break;

		default:
			return "error";
			break;
	}
}


console.log(nilai(30))
console.log(nilai(75))

