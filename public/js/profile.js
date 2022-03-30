/* eslint-disable no-undef */
const renderUserPosts = (data) => {
      data.forEach((postInfo)=>{
      const post = createElement('div','post');
      const content = createElement('div','content');
      const header = createElement('p','header');
      const nameUser = createElement('span','name-user',postInfo.name);
      const time = createElement('time','time',postInfo.created_at.slice(0,10));
      header.append('Posted by ',nameUser,' ', time);
      const desc = createElement('p','desc',postInfo.description);
      content.append(header, desc,);
      post.append(content)
      getElement('.posts').appendChild(post);
     
    });
}
const getUserPosts = () => {
    fetch ('/api/v1/profile/user')
    .then(res=>res.json())
    .then((data)=> {
        if(data.message === 'there is no posts') {
            getElement('.posts').textContent = data.message
        }
        else {
            deleteChild(getElement('.posts'));
            renderUserPosts(data)
        }
    })
    .catch((err)=>console.log(err));
}
getUserPosts();
