import { createPopup } from "./createElement.js";
import { playProcess } from "./index.js";

export function removeMatch() {
  playProcess.openedCards++;
  setTimeout(() => {
    playProcess.currentTarget.forEach((el) => {
      el.remove();
      playProcess.currentTarget = [];
    });
  }, 700);
  if (playProcess.openedCards === playProcess.inputValue) {
    createPopup();
  }
}

export function closeValueCard() {
  setTimeout(() => {
    playProcess.currentTarget.forEach((el) => {
      el.classList.add("card_hide");
      playProcess.currentTarget = [];
    });
  }, 700);
}
