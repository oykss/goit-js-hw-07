'use strict';

const values = {
  email: { name: 'email', value: '' },
  password: { name: 'password', value: '' },

  set emailValue(newEmail) {
    this.email.value = newEmail.trim();
  },
  set passwordValue(newPassword) {
    this.password.value = newPassword.trim();
  },
};

const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email && password) {
    values.emailValue = email;
    values.passwordValue = password;
    console.log(values);
    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
});
