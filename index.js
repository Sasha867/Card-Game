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

// export const scene = document.getElementsByClassName("scene")[0];
export const card = document.createElement("div");
export const infoDiv = document.getElementById("userValue");
export const gameZone = document.getElementById("fieldOfPlay");
export const buttonStart = document.getElementById("buttonStart");
export const input = document.getElementById("input");
export const playProcess = {
  currentTarget: [],
  openedCards: 0,
};

buttonStart.addEventListener("click", userSeleсted);
buttonStart.addEventListener("click", removePanelControl);
