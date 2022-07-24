import {
  creatButtonReset,
  createChoiceMessage,
  createElement,
} from "./createElement.js";
import { arrCards, gameZone, infoDiv, input, playProcess } from "./index.js";
import { changeGameFon } from "./showHideElements.js";
import { shuffleCards } from "./shuffleCards.js";

export function userSeleсted() {
  const userNumberOfCards = input.value;
  if ((userNumberOfCards > 1) & (userNumberOfCards < 33)) {
    createChoiceMessage(userNumberOfCards);
    console.log(userNumberOfCards);
    creatButtonReset();
    changeGameFon();
    shuffleCards(arrCards, userNumberOfCards);
  } else {
    createChoiceMessage(userNumberOfCards);
  }
}

export function removePanelControl() {
  document.querySelector(".buttonStart").remove();
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
