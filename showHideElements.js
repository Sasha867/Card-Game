import { gameZone, input, playProcess } from "./index.js";
import { closeValueCard, hangEventCard, removeMatch } from "./utils.js";

export function changeGameFon() {
  gameZone.classList.add("userGame");
  input.value = "";
}

export function showElements(newArr) {
  newArr.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("hide");
    card.style.background = ` url(${el}) no-repeat center/cover`;
    gameZone.append(card);
    hangEventCard(card);
  });
}

export function showCards({ target }) {
  target.classList.toggle("hide");
  if(playProcess.currentTarget[0] === )
  playProcess.currentTarget.push(target);
  if (playProcess.currentTarget.length === 2) {
    if (
      playProcess.currentTarget[0].style.background ===
      playProcess.currentTarget[1].style.background
    ) {
      removeMatch();
    } else {
      closeValueCard();
    }
  }
}
