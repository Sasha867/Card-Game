import {
  resetGame,
  userSeleсted,
  removePanelControl,
} from "./onClickFunctions.js";

export const arrCards = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
];
// const resButton = document.createElement("button");
export const infoDiv = document.getElementById("userValue");
export const gameZone = document.getElementById("fieldOfPlay");
export const buttonOk = document.getElementById("buttonOk");
export const input = document.getElementById("input");
export const resButton = document.createElement("button");
export const playProcess = {
  currentTarget: [],
  openedCards: 0,
};

buttonOk.addEventListener("click", userSeleсted);
buttonOk.addEventListener("click", removePanelControl);
resButton.addEventListener("click", resetGame);
