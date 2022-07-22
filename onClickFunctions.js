import { createElement } from "./createElement.js";
import {
  arrCards,
  gameZone,
  infoDiv,
  input,
  playProcess,
  resButton,
} from "./index.js";
import { changeGameFon } from "./showHideElements.js";
import { shuffleCards } from "./shuffleCards.js";

export function userSeleсted() {
  const userNumberOfCards = input.value;
  resButton.textContent = "reset";
  resButton.classList.add("resButton");
  if ((userNumberOfCards > 1) & (userNumberOfCards < 33)) {
    const p = document.createElement("p");
    p.classList.add("userMode");
    p.textContent = `You have selected ${input.value} decks mode`;
    infoDiv.append(p, resButton);
    console.log(userNumberOfCards);
    changeGameFon();
    shuffleCards(arrCards, userNumberOfCards);
  } else {
    infoDiv.innerHTML = `Enter correct value `;
  }
}

export function removePanelControl() {
  document.querySelector(".buttonOk").remove();
  document.querySelector(".input").remove();
}

export function resetGame() {
  gameZone.classList.toggle("userGame");
  input.value = "";
  gameZone.textContent = "";
  playProcess.openedCards = 0;
  console.log(playProcess.openedCards);
  createElement();
}
