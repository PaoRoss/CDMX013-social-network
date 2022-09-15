import { onNavigate } from '../main.js';

export const welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('img');
  const buttonSignIn = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const about = document.createElement('h3');

  about.textContent = 'Join the largest community of plant Lovers!';
  title.setAttribute('src', '/images/icon.png');
  buttonSignIn.textContent = 'Sign In';
  buttonRegister.textContent = 'Register';

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  buttonSignIn.addEventListener('click', () => {
    onNavigate('/signin');
  });

  div.append(title, about, buttonSignIn, buttonRegister);
  return div;
};
