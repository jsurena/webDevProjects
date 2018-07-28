var p1 = 0;
var p2 = 0;
var max = document.querySelector("#maxScore");
var winningScore = 5;
var scoreBox = document.querySelector("scoreBox");
var oneUp = document.querySelector("#oneUp");
var twoUp = document.querySelector("#twoUp");
var resetButton = document.querySelector("#reset");
var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");
var numInput = document.querySelector("input");

function oneAdd() {
	if (p1 < winningScore && p2 < winningScore) {
		p1 += 1; 
		p1Score.textContent = p1;
		if (p1 > p2 && (p1 - p2 >= 2) && p1 >= winningScore) {
			p1Score.classList.add("winner");
		}
	}

	else if ((p1 - p2 < 2 && p1 - p2 >=0) || (p2 - p1 < 2 && p2 - p1 >=0)) {
		p1 += 1;
		p1Score.textContent = p1;
		if (p1 > p2 && (p1 - p2 >= 2)) {
			p1Score.classList.add("winner");
		}
	}
}

function twoAdd() {
	if (p1 < winningScore && p2 < winningScore) {
		p2 += 1; 
		p2Score.textContent = p2;
		if (p2 > p1 && (p2 - p1 >= 2) && p2 >= winningScore) {
			p2Score.classList.add("winner");
		}
	}

	else if ((p1 - p2 < 2 && p1 - p2 >=0) || (p2 - p1 < 2 && p2 - p1 >=0)) {
		p2 += 1;
		p2Score.textContent = p2;
		if (p2 > p1 && (p2 - p1 >= 2)) {
			p2Score.classList.add("winner");
		}
	}
}

function reset() {
	p1 = 0;
	p2 = 0;
	p1Score.textContent = p1;
	p2Score.textContent = p2;
	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner");
}

oneUp.addEventListener("click", oneAdd);
twoUp.addEventListener("click", twoAdd);
resetButton.addEventListener("click", reset);
numInput.addEventListener("change", function() {
	maxScore.textContent = numInput.value;
	winningScore = numInput.value;
});

/* function changeMax() {
	max.textContent = "Playing to: "// text box input
}

scoreBox.addEventListener("", changeMax);

*/



