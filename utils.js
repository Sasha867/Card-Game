import {  playProcess } from "./index.js";
import { showCards } from "./showHideElements.js";

export const hangEventCard = function hangEventCard(card) {
  card.addEventListener("click", showCards);
};

export function removeMatch() {
  playProcess.openedCards++;
  playProcess.currentTarget.forEach((el) => {
    el.remove();
    playProcess.currentTarget = [];
    console.log(playProcess.openedCards);
  });
}

export function closeValueCard() {
  playProcess.currentTarget.forEach((el) => {
    el.classList.toggle("hide");
    playProcess.currentTarget = [];
  });
}


