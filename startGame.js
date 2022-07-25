import { createButtonStart, createInput } from "./createElement.js";

export function NewGame() {
  document.querySelector(".userMode").remove();
  document.querySelector(".resButton").remove();
  createInput();
  createButtonStart();
}
