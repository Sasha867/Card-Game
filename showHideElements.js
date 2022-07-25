import { gameZone, playProcess } from "./index.js";
import { hangEventCard } from "./onClickFunctions.js";
import { closeValueCard, removeMatch } from "./utils.js";

export function changeGameFon() {
  gameZone.classList.add("userGame");
}

export function showElements(newArr) {
  newArr.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card_hide");
    card.style.background = ` url(${el}) no-repeat center/cover`;
    gameZone.append(card);
    hangEventCard(card);
  });
}

export function showCards({ target }) {
  if (playProcess.currentTarget[0] !== target) {
    target.classList.toggle("card_hide");
    playProcess.currentTarget.push(target);
  } else {
    playProcess.currentTarget.shift();
    target.classList.add("card_hide");
  }
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
