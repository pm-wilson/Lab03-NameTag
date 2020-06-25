const buttonCount = {
  pink: 0,
  blue: 0,
  green: 0,
};

document.getElementById("name-input").addEventListener("keyup", () => {
  const newName = document.getElementById("name-input").value,
    placeToDisplay = document.getElementById("display-name");

  if (newName.length > 16) {
    maxCharacter();
    placeToDisplay.textContent = first16(newName);
    document.getElementById("name-input").value = first16(newName);
  } else {
    placeToDisplay.textContent = newName;
  }
});

document.getElementById("pink").addEventListener("click", changePink);
document.getElementById("blue").addEventListener("click", changeBlue);
document.getElementById("green").addEventListener("click", changeGreen);

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
  //added extra code to undo initial random color click
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

function maxCharacter() {
  alert("Please choose a name shorter than 16 characters");
}

function first16(name) {
  const arrayOfLetters = name.split("");
  let newName = "";

  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (i < 16) {
      newName += arrayOfLetters[i];
    }
  }
  return newName;
}
onLoad();
