/* eslint-disable no-undef */
const headerUserDropdown = document.querySelector('.header-user-dropdown');


const dropdown = document.querySelector('.dropdown');
headerUserDropdown.addEventListener('click', () => {
  dropdown.classList.toggle('display');
});

const getPosts = () => {
  fetch('/posts')
    .then((res) => res.json())
    .then((data) => {
      renderPosts(data);
    })
    .catch((err) => console.log(err));
};
getPosts();
