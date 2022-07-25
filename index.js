import { createButtonStart, createInput } from "./createElement.js";

export const arrCards = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
];

// export const scene = document.getElementsByClassName("scene")[0];
export const card = document.createElement("div");
export const infoDiv = document.getElementById("userValue");
export const gameZone = document.getElementById("fieldOfPlay");
export const container = document.getElementsByClassName("containerControl")[0];
export const playProcess = {
  currentTarget: [],
  openedCards: 0,
  inputValue: 0,
};
export function start(){
  createInput();
  createButtonStart();
  
}
start();
export const input = document.getElementsByClassName("input")[0];
export const buttonStart = document.getElementsByClassName("buttonStart")[0];
console.log(input);