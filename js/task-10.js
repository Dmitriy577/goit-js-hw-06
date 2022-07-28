function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const numberElem = document.querySelector("#controls input");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");

btnCreate.addEventListener('click', () => {
  const amount = parseInt(numberElem.value,10);
  createBoxes(amount);
});

btnDestroy.addEventListener('click', () => {
  container.innerHTML = "";
});

function createBoxes(amount) {
  const baseSize = 30;
  let boxes = [];

  for (let i = 0; i < amount; i += 1) {
    boxes.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${
        baseSize + 10 * i
      }px; height: ${baseSize + 10 * i}px"></div>`
    );
  }

  document.querySelector("#boxes").innerHTML = boxes.join("");
}