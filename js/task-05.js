const textInput = document.querySelector('name-input');
const span = document.querySelector('name-output');
textInput.addEventListener('input', event => {
  if (textInput.value === '') {
    return span.textContent = 'Anonymous';
  }
  span.textContent = event.currentTarget.value;
});
