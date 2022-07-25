import { creatButtonReset, createChoiceMessage } from "./createElement.js";
import { arrCards, gameZone, input, playProcess } from "./index.js";
import { changeGameFon, showCards } from "./showHideElements.js";
import { shuffleCards } from "./shuffleCards.js";

export const hangEventCard = function hangEventCard(card) {
  card.addEventListener("click", showCards);
};

export function userSeleсted() {
  const input = document.getElementsByClassName("input")[0];
  playProcess.inputValue = +input.value;
  console.log(playProcess.inputValue);
  if ((playProcess.inputValue > 1) & (playProcess.inputValue < 33)) {
    createChoiceMessage(playProcess.inputValue);
    console.log(playProcess.inputValue);
    creatButtonReset();
    changeGameFon();
    shuffleCards(arrCards, playProcess.inputValue);
  } else {
    createChoiceMessage(playProcess.inputValue);
  }
}

export function removePanelControl() {
  document.querySelector(".buttonStart").remove();
  document.querySelector(".input").remove();
}

export function resetGame() {
  gameZone.classList.toggle("userGame");
  input.value = 0;
  gameZone.textContent = "";
  playProcess.openedCards = 0;
  console.log(playProcess.openedCards);
  // createElement();
}
