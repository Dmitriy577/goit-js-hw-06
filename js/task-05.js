const textInput = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
textInput.addEventListener('input', event => {
  span.textContent = event.currentTarget.value.toUpperCase();
  if (textInput.value === '') {
    span.textContent = 'Anonymous';
  }
});
