import { start } from "./index.js";
import { resetGame } from "./onClickFunctions.js";

export function newGame() {
  document.querySelector(".userMode").remove();
  document.querySelector(".resButton").remove();
  start();
  resetGame();
}
