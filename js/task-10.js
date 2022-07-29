function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const numberElem = document.querySelector("#controls input");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");

btnCreate.addEventListener('click', () => {
  const amount = Number(numberElem.value);
  createBoxes(amount);
});
btnDestroy.addEventListener('click', () => {
  document.querySelector("#boxes").innerHTML = "";
});
let baseSize = 30;
function createBoxes(amount) {
  let boxes = [];
  for (let i = 0; i < amount; i += 1) {
    boxes.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${baseSize}px; height: ${baseSize}px"></div>`
    );
    baseSize += 10;
  }
  container.insertAdjacentHTML("beforeEnd", boxes.join(""));
}