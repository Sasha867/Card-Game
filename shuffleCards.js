
import {  showElements } from "./showHideElements.js";

export function shuffleCards(arrCards, userNumberOfCards) {
  const newArr = [];
  const arr = arrCards.slice(0, userNumberOfCards);
  const tempArr = [...arr, ...arr];
  for (let i = 0; i < userNumberOfCards * 2; i++) {
    // debugger;
    const rand = Math.floor(Math.random() * tempArr.length);
    let temp = tempArr.splice(rand, 1);
    newArr.push(...temp);
  }
  console.log(newArr);
  showElements(newArr);
}
