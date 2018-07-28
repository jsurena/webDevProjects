var squares = document.querySelectorAll(".square");

var numColors = squares.length;
var colors = generateRandomColors(numColors);

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numColors = 3;
	resetBoard();
	for (var i = numColors; i < squares.length; i++) {
		squares[i].style.display = "none";
	}
	for (var i = 0; i < numColors; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numColors = 6;
	resetBoard();
	for (var i = 0; i < numColors; i++) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
});

resetButton.addEventListener("click", function() {
	resetBoard();	
	for (var i = 0; i < numColors; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < numColors; i++) {
	// add colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < numColors; i++) {
		if (squares[i].style.backgroundColor != color) {
			squares[i].style.backgroundColor = color;
		}
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var colors = [];
	for (var i = 0; i < num; i++) {
		colors.push(randomColor());;
	}

	return colors;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);

	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	return color;
}

function resetBoard() {
	colors = generateRandomColors(numColors);
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
}