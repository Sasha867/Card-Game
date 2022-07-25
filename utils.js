import { createPopup } from "./createElement.js";
import {  input, playProcess } from "./index.js";
import { showCards } from "./showHideElements.js";



export function removeMatch() {
  playProcess.openedCards++;
  const userNumberOfCards = +input.value;
  playProcess.currentTarget.forEach((el) => {
    el.remove();
    playProcess.currentTarget = [];

    console.log(playProcess.openedCards);
  });
  console.log(userNumberOfCards);
  if (playProcess.openedCards === userNumberOfCards){
    createPopup()
  }

}

export function closeValueCard() {
  playProcess.currentTarget.forEach((el) => {
    el.classList.toggle("card_hide");
    playProcess.currentTarget = [];
  });
}


