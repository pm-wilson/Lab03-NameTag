const buttonCount = {
  pink: 0,
  blue: 0,
  green: 0,
};

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
  const elementToChange = document.getElementById("color-to-change"),
    buttonToUpdate = document.getElementById("pink");

  updateCount("pink");
  buttonToUpdate.textContent = "Pink (" + buttonCount.pink + ")";
  unSelectAllButtons();
  selectButton("pink");
  elementToChange.style.background = "pink";
}

function changeBlue() {
  const elementToChange = document.getElementById("color-to-change"),
    buttonToUpdate = document.getElementById("blue");

  updateCount("blue");
  buttonToUpdate.textContent = "Blue (" + buttonCount.blue + ")";
  unSelectAllButtons();
  selectButton("blue");
  elementToChange.style.background = "lightblue";
}

function changeGreen() {
  const elementToChange = document.getElementById("color-to-change"),
    buttonToUpdate = document.getElementById("green");

  updateCount("green");
  buttonToUpdate.textContent = "Green (" + buttonCount.green + ")";
  unSelectAllButtons();
  selectButton("green");
  elementToChange.style.background = "lightgreen";
}

function selectButton(buttonID) {
  document.getElementById(buttonID).classList.add("selected");
}

function unSelectAllButtons() {
  document.getElementById("pink").classList.remove("selected");
  document.getElementById("blue").classList.remove("selected");
  document.getElementById("green").classList.remove("selected");
}

function updateCount(color) {
  const newCount = buttonCount[color] + 1;
  console.log(newCount);
  buttonCount[color] = newCount;
}

function onLoad() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    changePink();
    buttonCount.pink = 0;
    document.getElementById("pink").textContent = "Pink";
  } else if (randomNumber === 1) {
    changeBlue();
    buttonCount.blue = 0;
    document.getElementById("blue").textContent = "Blue";
  } else {
    changeGreen();
    buttonCount.green = 0;
    document.getElementById("green").textContent = "Green";
  }
}

onLoad();
