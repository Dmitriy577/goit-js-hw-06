let counterValue = 0;
const buttons = document.querySelectorAll("#counter button");
const spanValue = document.querySelector("#value");

const onClick = (clicker) => {
  if (clicker.target.getAttribute("data-action") === 'increment'){
    counterValue++;
  } else {
    counterValue--;
  }
  spanValue.innerText = counterValue;
};

for (const button of buttons){ 
  button.addEventListener("click", onClick);
}