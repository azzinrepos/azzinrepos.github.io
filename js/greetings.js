const loginContainer = document.querySelector('.login-container');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const todoContainer = document.querySelector('.todo-container');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintingGreetings(username);
}

function paintingGreetings(username) {
  const span = document.createElement('span');
  span.innerText = `Hello, ${username}`;
  greeting.appendChild(span);
  todoContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginContainer.classList.remove('hidden');
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintingGreetings(savedUsername);
}
