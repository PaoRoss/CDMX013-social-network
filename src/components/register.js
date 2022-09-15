import { onNavigate } from '../main.js';

export const register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const lettering = document.createElement('img');
  const buttonRegister = document.createElement('button');

  title.textContent = 'Welcome to';
  lettering.setAttribute('src', '/images/lettering.png');
  buttonRegister.textContent = 'Register';

  div.append(title, lettering, buttonRegister);
  return div;
};
