const spanColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');

buttonColor.addEventListener('click', event => {
  const arr = (bodyColor.style.backgroundColor = getRandomHexColor());
  spanColor.innerHTML = arr;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}