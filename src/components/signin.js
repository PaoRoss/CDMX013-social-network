import { onNavigate } from '../main.js';

export const signIn = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const brandIcon = document.createElement('img');
  const buttonSignIn = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const askAccount = document.createElement('p');
  const linkRegister = document.createElement('a');

  title.textContent = 'Welcome back';
  brandIcon.setAttribute('src', '/images/opcion1.png');
  buttonSignIn.textContent = 'Sign In';
  inputEmail.placeholder = 'Enter your email';
  inputPassword.placeholder = 'Enter password';
  askAccount.textContent = 'Don’t have an account ?';
  linkRegister.textContent = 'Resgister';

  buttonSignIn.addEventListener('click', () => {
    onNavigate('/wall');
  });

  div.append(title, brandIcon, inputEmail, inputPassword, buttonSignIn, askAccount, linkRegister);
  return div;
};
