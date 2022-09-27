import { endSesion, auth } from '../lib/auth.js';
import { onAuthStateChanged, getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

export const wall = () => {
  const div = document.createElement('div');
  const upperBannerDiv = document.createElement('div');
  const growLetters = document.createElement('img');
  const textUserName = document.createElement('p');
  const userIcon = document.createElement('img');
  const makePostDiv = document.createElement('div');
  const postTextBox = document.createElement('input');
  const buttonCreatePost = document.createElement('button');
  const postsSectionDiv = document.createElement('div'); // Sección donde se verán las publicaciones
  const publishedPost = document.createElement('div'); // Caja donde estarán las publicaciones aún no tiene estilos
  const bottomBannerDiv = document.createElement('div');
  const bottomLine = document.createElement('div');
  const homeIcon = document.createElement('img');
  const logOut = document.createElement('img');

  growLetters.setAttribute('src', '/images/lettering.png');
  //textUserName.textContent = 'PlantLover1'; // Supongo que este campo se va a obtener de la base de datos
  userIcon.setAttribute('src', '/images/userIcon.png');
  postTextBox.placeholder = 'What are you thinking?';
  buttonCreatePost.textContent = 'Post';
  homeIcon.setAttribute('src', 'images/homeIcon.png');
  logOut.setAttribute('src', '/images/log-out.png');

  div.classList.add('wall-div');
  upperBannerDiv.classList.add('upperBannerDiv');
  growLetters.classList.add('growLetters');
  textUserName.classList.add('userName');
  userIcon.classList.add('userIcon');
  postTextBox.classList.add('postTextBox');
  makePostDiv.classList.add('makePostDiv');
  publishedPost.classList.add('publishedPost');
  buttonCreatePost.classList.add('postButton');
  postsSectionDiv.classList.add('postsSectionDiv');
  bottomBannerDiv.classList.add('bottomBannerDiv');
  bottomLine.classList.add('bottomLine');
  homeIcon.classList.add('homeIcon');
  logOut.classList.add('logOut');
  
  const user = auth.currentUser;
  console.log(user);
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      console.log(user.email);
      textUserName.textContent = user.email;
    }else{
      console.log('No hay usuarios activos');
    }
  });

  logOut.addEventListener('click', () => {
    endSesion();
  });
  upperBannerDiv.append(growLetters, textUserName, userIcon);
  makePostDiv.append(postTextBox, buttonCreatePost);
  postsSectionDiv.append(publishedPost);
  bottomBannerDiv.append(bottomLine, logOut);

  div.append(upperBannerDiv, makePostDiv, postsSectionDiv, bottomBannerDiv);
  return div;
};