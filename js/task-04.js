const value = document.querySelector("#value");

var button = document.querySelector('button[data-action="decrement"]'),
  counterValue = 0;
button.onclick = function () {
  counterValue -= 1;
  value.innerHTML = counterValue;
};

var button = document.querySelector('button[data-action="increment"]'),
  counterValue = 0;
button.onclick = function () {
  counterValue += 1;
  value.innerHTML = counterValue;
};