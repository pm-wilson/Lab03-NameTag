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

  unSelectAllButtons();
  selectButton("pink");
  elementToChange.style.background = "pink";
}

function changeBlue() {
  const elementToChange = document.getElementById("color-to-change");

  unSelectAllButtons();
  selectButton("blue");
  elementToChange.style.background = "lightblue";
}

function changeGreen() {
  const elementToChange = document.getElementById("color-to-change");

  unSelectAllButtons();
  selectButton("green");
  elementToChange.style.background = "lightgreen";
}

function selectButton(buttonID) {
  document.getElementById(buttonID).classList.add("selected");
  console.log("select button");
}

function unSelectAllButtons() {
  document.getElementById("pink").classList.remove("selected");
  document.getElementById("blue").classList.remove("selected");
  document.getElementById("green").classList.remove("selected");
}

function onLoad() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    changePink();
  } else if (randomNumber === 1) {
    changeBlue();
  } else {
    changeGreen();
  }
}

onLoad();
