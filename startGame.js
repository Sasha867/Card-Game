
import { start } from "./index.js";

export function newGame() {
  document.querySelector(".userMode").remove();
  document.querySelector(".resButton").remove();
  start();
}
