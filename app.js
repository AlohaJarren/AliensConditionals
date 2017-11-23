var blueAliens = 1700;
var greenAliens = 6300;
var redAliens = 2000;
var allAliens = 10000;

function alienTotal() {
	if (blueAliens + greenAliens + redAliens == allAliens) {
		aliensAreGee();
	}
	else {
		console.log("Hold up, there ain't 10k aliens my guy.. Redo your quick maths again");
	}
}

alienTotal();

function aliensAreGee() {
	if (greenAliens >= 5000) {
		console.log("MOTHER OF GOD, not the green ones");
	}
	if (greenAliens + redAliens >= 8000) {
		console.log("DOOOOOM");
	}
	if (redAliens + blueAliens <= 3000) {
		console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");
	}
}

//If aliensAreGee is invoked, then function repeats b/c of console.log