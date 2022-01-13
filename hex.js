const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

// Initialialze Color
setRandomColor();

//Set New Color on Click
button.addEventListener("click", function () {
  setRandomColor();
});

function setRandomColor() {
  let generatedHex = "#";

  for (i = 1; i <= 6; i++) {
    generatedHex += hex[getRandomNumber(hex.length - 1)];
  }
  color.textContent = generatedHex;
  document.body.style.backgroundColor = generatedHex;

  var n_match = ntc.name(generatedHex);

  n_name = n_match[1]; // Text string: Color name

  color.textContent += " " + n_name;
}

function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}
