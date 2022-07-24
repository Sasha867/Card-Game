import { gameZone, input, playProcess } from "./index.js";
import { closeValueCard, hangEventCard, removeMatch } from "./utils.js";

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
    // card.addEventListener("click", function () {
    //   card.classList.toggle("is-flipped");
    // });
  });
}

export function showCards({ target }) {
  target.classList.toggle("card_hide");
  if (playProcess.currentTarget[0] !== target)
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
