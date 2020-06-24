document.getElementById("name-input").addEventListener("keyup", updateName);
document.getElementById("pink").addEventListener("click", changePink);
document.getElementById("blue").addEventListener("click", changeBlue);
document.getElementById("green").addEventListener("click", changeGreen);

function updateName() {
  const newName = document.getElementById("name-input").value,
    placeToDisplay = document.getElementById("display-name");

  placeToDisplay.textContent = newName;
}

function changePink() {
  const elementToChange = document.getElementById("color-to-change");

  elementToChange.style.background = "pink";
}

function changeBlue() {
  const elementToChange = document.getElementById("color-to-change");

  elementToChange.style.background = "lightblue";
}

function changeGreen() {
  const elementToChange = document.getElementById("color-to-change");

  elementToChange.style.background = "lightgreen";
}

function onLoad() {
  const randomNumber = Math.floor(Math.random()) * 3,
    colors = [changePink(), changeBlue(), changeGreen()],
    randomColor = colors[randomNumber];
}
