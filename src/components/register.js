import { onNavigate } from '../main.js';
import { createAccount } from '../lib/auth.js';

export const register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const lettering = document.createElement('img');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');

  title.textContent = 'Welcome to';
  lettering.setAttribute('src', '/images/lettering.png');
  inputEmail.placeholder = 'Enter your email';
  inputPassword.placeholder = 'Enter password';
  buttonRegister.textContent = 'Register';

  buttonRegister.addEventListener('click', () => {
    const emailValue = inputEmail.value;
    const passwordValue = inputPassword.value;

    createAccount(emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        onNavigate('/wall');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  div.append(title, lettering, inputEmail, inputPassword, buttonRegister);
  return div;
};
