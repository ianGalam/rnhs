const loginForm = document.querySelector('#login-form');
const loginEmailInput = document.querySelector('#login-email');
const loginPasswordInput = document.querySelector('#login-password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

});

const signupForm = document.querySelector('#signup-form');
const signupNameInput = document.querySelector('#signup-name');
const signupEmailInput = document.querySelector('#signup-email');
const signupPasswordInput = document.querySelector('#signup-password');
const signupConfirmPasswordInput = document.querySelector('#signup-confirm-password');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = signupNameInput.value;
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;
  const confirmPassword = signupConfirmPasswordInput.value;

});
