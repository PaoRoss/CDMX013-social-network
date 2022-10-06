import { onAuthStateChanged, getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { endSesion, auth } from '../lib/auth.js';
import { onNavigate } from '../main.js';
import { postCollection, onRealTime, deleteDocPost } from '../lib/firestore.js';

// HTML elements
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
  const userIconPost = document.createElement('img');
  const text = document.createElement('p');
  const heartIcon = document.createElement('img');
  const likeIcon = document.createElement('img');
  const likeCount = document.createElement('p');
  const bottomBannerDiv = document.createElement('div');
  const bottomLine = document.createElement('div');
  const homeIcon = document.createElement('img');
  const logOut = document.createElement('img');

  growLetters.setAttribute('src', '/images/lettering.png');
  userIcon.setAttribute('src', '/images/userIcon.png');
  postTextBox.placeholder = 'What are you thinking?';
  buttonCreatePost.textContent = 'Post';
  userIconPost.setAttribute('src', '/images/userIcon.png');
  text.textContent = 'Remember to water your plants less on winter!';
  heartIcon.setAttribute('src', '/images/heartIcon.png');
  likeIcon.setAttribute('src', '/images/likeIcon.png');
  likeCount.textContent = '+ 2 likes';
  homeIcon.setAttribute('src', 'images/homeIcon.png');
  logOut.setAttribute('src', '/images/log-out.png');

  div.classList.add('wall-div');
  upperBannerDiv.classList.add('upperBannerDiv');
  growLetters.classList.add('growLetters');
  textUserName.classList.add('userName');
  userIcon.classList.add('userIcon');
  postTextBox.classList.add('postTextBox');
  makePostDiv.classList.add('makePostDiv');
  publishedPost.classList.add('publishedPost');//
  buttonCreatePost.classList.add('postButton');
  postsSectionDiv.classList.add('postsSectionDiv');
  userIconPost.classList.add('userIcon');//
  text.classList.add('publishedText'); //
  heartIcon.classList.add('heartIcon'); //
  likeIcon.classList.add('likeIcon');//
  likeCount.classList.add('likeCount');//
  bottomBannerDiv.classList.add('bottomBannerDiv');
  bottomLine.classList.add('bottomLine');
  homeIcon.classList.add('homeIcon');
  logOut.classList.add('logOut');

  // Functions
  const user = auth.currentUser;
  console.log(user);
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      console.log(user.displayName);
      textUserName.textContent = user.email;
    }
    if (user === null) {
      onNavigate('/');
      console.log('No hay usuarios activos');
    }
  });

  const createCards = (user, texto) => {
    const publishedPost = document.createElement('div');
    publishedPost.classList.add('publishedPost');
    const userIconPost = document.createElement('img');
    const userEmailPost = document.createElement('p');
    const text = document.createElement('p');
    const heartIcon = document.createElement('img');
    // const likeIcon = document.createElement('img');
    const likeCount = document.createElement('p');
    const deleteButton = document.createElement('img');

    userIconPost.setAttribute('src', '/images/userIcon.png');
    text.textContent = 'Remember to water your plants less on winter!';
    heartIcon.setAttribute('src', '/images/heartIcon.png');
    likeIcon.setAttribute('src', '/images/likeIcon.png');
    deleteButton.setAttribute('src', '/images/trash.png');

    userEmailPost.classList.add('userName');
    postsSectionDiv.classList.add('postsSectionDiv');
    userIconPost.classList.add('userIcon');
    text.classList.add('publishedText');
    heartIcon.classList.add('heartIcon');
    likeIcon.classList.add('likeIcon');
    likeCount.classList.add('likeCount');
    deleteButton.classList.add('deleteButton');

    userEmailPost.textContent = user;
    text.textContent = texto;

    deleteButton.addEventListener('click', () => {
      console.log('¿dónde estás Pao?');
    });

    publishedPost.append(userIconPost, userEmailPost, text, heartIcon, likeIcon, deleteButton, likeCount);
    postsSectionDiv.append(publishedPost);
  };

  const getPosts = async () => {
    onRealTime((querySnapshot) => {
      const postinfo = [];
      postsSectionDiv.innerHTML = '';
      querySnapshot.forEach((doc) => {
      /// const postDescription = doc.data();
        // console.log(doc.id, ' => ', doc.data());
        postinfo.push(doc.data());
        const html = `<div class='publishedPost'>
                    <img class='userIcon' src='/images/userIcon.png'>
                    <p class='userName'>${doc.data().user}</p>
                    <p class='publishedText'>${doc.data().post}</p>
                    <img class='heartIcon' src='/images/heartIcon.png'>
                    <!-- <img class='likeIcon' src='/images/likeIcon.png'>-->
                    <img class='deleteButton' src='/images/trash.png' data-id='${doc.id}'>
                    </div>`;
        postsSectionDiv.innerHTML += html;
      });

      const deletePostButtons = document.querySelectorAll('.deleteButton');

      deletePostButtons.forEach(btn => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          console.log(dataset.id);
          deleteDocPost(dataset.id);
        });
      });
      
      console.log(postinfo);
      /* postinfo.forEach((element) => {
        //createCards(element.user, element.post);

    }); */
    });
  };
  getPosts();

  // -->Here goes the setDoc function

  // Event Listeners

  buttonCreatePost.addEventListener('click', () => {
    const postValue = postTextBox.value;
    console.log(postValue);
    postCollection(postValue, user).then((doc) => {
      console.log(doc);
    });
  });

  logOut.addEventListener('click', () => {
    endSesion()
      .then(() => {
        onNavigate('/');
      });
  });
  upperBannerDiv.append(growLetters, textUserName, userIcon);
  makePostDiv.append(postTextBox, buttonCreatePost);
  bottomBannerDiv.append(bottomLine, logOut);

  div.append(upperBannerDiv, makePostDiv, postsSectionDiv, bottomBannerDiv);
  return div;
};
