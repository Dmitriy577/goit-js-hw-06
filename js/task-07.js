const fontControl = document.querySelector('#font-size-control');
const textControl = document.querySelector('#text');

fontControl.addEventListener('input', () => {
  textControl.style.fontSize = `${Number(fontControl.value)}px`;
});