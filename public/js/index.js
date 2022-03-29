/* eslint-disable no-undef */
const headerUserDropdown  = document.querySelector('.header-user-dropdown');
const addPostBtn = document.querySelector('.add-post');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const userLogin = document.querySelectorAll('.user-login');
const errorPost = document.querySelector('.error-post')

const dropdown = document.querySelector('.dropdown');
headerUserDropdown.addEventListener('click',()=> {
    dropdown.classList.toggle('display')
});

const getPosts = () => {
    fetch ('/posts')
    .then(res=>res.json())
    .then((data)=> {
        renderPosts(data)
    }
    )
    .catch((err)=>console.log(err));
}
getPosts()

addPostBtn.addEventListener('click',()=> {
    if(title.value === '') {
        errorPost.textContent = ' title must not empty';
    }else if (description.value === '') {
        errorPost.textContent = ' description must not empty';
    }else {
        errorPost.textContent = ' ';
        let obj = {
            title: title.value,
            description:description.value
        }
        fetch('/api/v1/addPost', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
          })
            .then((res) => res.json())
            .then((data) => {   
              if (data.status === 201) {
                swal('Added!', data.message, 'success');
                getPosts()
              } 
            })
            .catch((err) => console.log(err));
    }
});

fetch('/api/v1/user/name')
.then((res)=>res.json())
.then((userInfo)=>{
    userLogin.forEach(element => {
       element.textContent = userInfo[0].name;
   });
})
.catch((err) => console.log(err));
