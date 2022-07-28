const onInput = document.querySelector('#validation-input');
const lengthInput = onInput.getAttribute('data-length');
onInput.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(lengthInput)) {
    onInput.classList.add('valid');
    onInput.classList.remove('invalid');
  } else {
    onInput.classList.remove('valid');
    onInput.classList.add('invalid');
  }
});
