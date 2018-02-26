var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// random elements
var random = document.querySelector("button");
var hex_values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomizeColors() {
  var color1_value = "#";
  var color2_value = "#";
  
  for (var i = 0; i < 6; i++) {
    color1_value += hex_values[Math.floor(Math.random() * 16)];
    color2_value += hex_values[Math.floor(Math.random() * 16)];
  }
  
  color1.value = color1_value;
  color2.value = color2_value;
  
  setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomizeColors);

randomizeColors();