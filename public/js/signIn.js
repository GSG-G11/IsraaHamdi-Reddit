/* eslint-disable no-undef */
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorEmail = document.querySelector('.error-email');
const errorPassword = document.querySelector('.error-password');

const signInBtn = document.querySelector('#sign-in');
signInBtn.addEventListener('click', () => {
  if (email.value === '') {
    errorEmail.textContent = 'email must not empty';
  } else if (email.value.split('@').length !== 2) {
    errorEmail.textContent = 'please enter valid email like this aaa@hotmail.com';
  } else if (password.value === '') {
    errorEmail.textContent = '';
    errorPassword.textContent = 'password must not empty';
  } else if (password.value.length < 8) {
    errorEmail.textContent = '';
    errorPassword.textContent = 'password length at least 8 char';
  } else if (
    !password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ) {
    errorEmail.textContent = '';
    errorPassword.textContent = 'Must at least contain one number,lowercase letter, uppercase letter and special character';
  } else {
    errorEmail.textContent = '';
    errorPassword.textContent = '';
    const obj = {
      email: email.value,
      password: password.value,
    };
    fetch('/api/v1/signIn', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
       if (data.message === 'this email is not exists') {
        errorEmail.textContent = data.message;
       } else if (data.message === 'Invalid Password') {
        errorPassword.textContent = data.message;
       } else {
        swal('success sign in :)', data.message, 'success');
        window.location.href = '/api/v1/home';
       }
      })
      .catch((err) => console.log(err));
  }
});
