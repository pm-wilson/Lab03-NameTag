document.getElementById("name-input").addEventListener("keyup", updateName);

function updateName() {
  const newName = document.getElementById("name-input").value,
    placeToDisplay = document.getElementById("display-name");

  placeToDisplay.textContent = newName;
}
