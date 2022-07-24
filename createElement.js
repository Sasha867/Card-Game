import { buttonStart, input, infoDiv } from "./index.js";
import { resetGame, userSeleсted } from "./onClickFunctions.js";

export function createElement() {
  buttonStart.classList.add("buttonOk"); //!!!
  input.classList.add("input");
}

export function creatButtonReset() {
  const resButton = document.createElement("button");
  resButton.textContent = "reset";
  resButton.classList.add("resButton");
  infoDiv.append(resButton);
  resButton.addEventListener("click", resetGame);
}

export function createChoiceMessage(userNumberOfCards) {
  const p = document.createElement("p");
  p.classList.add("userMode");
  if ((userNumberOfCards > 1) & (userNumberOfCards < 33)) {
    p.textContent = `You have selected ${userNumberOfCards} decks mode`;
    infoDiv.append(p);
  } else {
    p.textContent = `Enter correct value`;
    infoDiv.append(p);
  }
}

export function createPopup() {
  const popup = document.createElement("div");
  popup.classList.add("containerPopup");
  const h1 = document.getElementsByClassName("tittle")[0];
  h1.before(popup);
  const popupInfo = document.createElement("div");

  popupInfo.textContent = `Congratulations you win, 
  click "New game" !!!`;
  popupInfo.classList.add("popupInfo");
  popup.append(popupInfo);
  const buttonNewGame = document.createElement("button");
  buttonNewGame.textContent = "New game";
  buttonNewGame.classList.add("buttonNewGame");
  popupInfo.append(buttonNewGame);
  // buttonNewGame.addEventListener("click", userSeleсted)
}
