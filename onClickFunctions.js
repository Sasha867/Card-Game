import { arrCards, resButton, infoDiv, input } from "./index.js";
import { changeGameFon } from "./showHideElements.js";
import { shuffleCards } from "./shuffleCards.js";

export const userSelected = function userSeleсted() {
  // const keyMouseName = event.pointerType;
  // const keyName = event.code;
  // if (keyName === "Enter" || keyMouseName === "mouse") {
  //   counterAttemps = chekEnterValue(resultCounter, arrLetters);
  // }
  const userNumberOfCards = input.value;
  resButton.classList.add("resButton");
  infoDiv.append((resButton.textContent = "reset"));
  if ((userNumberOfCards > 1) & (userNumberOfCards < 33)) {
    infoDiv.innerHTML = `You have selected ${input.value} decks mode `;
    console.log(userNumberOfCards);
    changeGameFon();
    shuffleCards(arrCards, userNumberOfCards);
  } else {
    infoDiv.innerHTML = `Enter correct value `;
  }
};
