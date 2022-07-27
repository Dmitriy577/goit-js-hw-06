const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = new FormData(form);
  const valuesFotm = Object.fromEntries(formData.entries());
  console.log(valuesFotm);

  event.currentTarget.reset();
}
