import { infoDiv, container } from "./index.js";
import {
  removePanelControl,
  resetGame,
  userSeleсted,
} from "./onClickFunctions.js";
import { newGame } from "./startGame.js";

export function createInput() {
  const input = document.createElement("input");
  input.placeholder = "Enter the number of card pairs 2-16";
  input.type = "number";
  input.classList.add("input");
  container.append(input);
  const userNumberOfCards = +input.value; //
  console.log(userNumberOfCards); //
  return userNumberOfCards; //
}

export function createButtonStart() {
  const buttonStart = document.createElement("button");
  buttonStart.classList.add("buttonStart");
  buttonStart.textContent = "Start Game";
  container.append(buttonStart);
  buttonStart.addEventListener("click", userSeleсted);
  buttonStart.addEventListener("click", removePanelControl);
}

export function creatButtonReset() {
  const resButton = document.createElement("button");
  resButton.textContent = "reset";
  resButton.classList.add("resButton");
  infoDiv.append(resButton);
  resButton.addEventListener("click", resetGame);
  resButton.addEventListener("click", newGame);
}

export function createChoiceMessage(userNumberOfCards) {
  const p = document.createElement("p");
  p.classList.add("userMode");
  if ((userNumberOfCards > 1) & (userNumberOfCards < 17)) {
    p.textContent = `You have selected ${userNumberOfCards} decks mode`;
    infoDiv.append(p);
  } else {
    p.textContent = `Enter correct value`;
    infoDiv.append(p);
    createInput();
    console.log(userNumberOfCards);
    createButtonStart();
  }
}

export function createPopup() {
  const popup = document.createElement("div");
  popup.classList.add("containerPopup");
  const h1 = document.getElementsByClassName("tittle")[0];
  h1.before(popup);
  const popupInfo = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = `Congratulations you win, 
  click "New game" !!!`;
  p.classList.add("popupText");
  popupInfo.classList.add("popupInfo");
  popupInfo.append(p);
  popup.append(popupInfo);
  const buttonNewGame = document.createElement("button");
  buttonNewGame.textContent = "New game";
  buttonNewGame.classList.add("buttonNewGame");
  popupInfo.append(buttonNewGame);
  buttonNewGame.addEventListener("click", () => {
    document.querySelector(".containerPopup").remove();

    resetGame();
    newGame();
  });
}
