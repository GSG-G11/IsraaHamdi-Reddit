/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

  const renderPosts = (data) => {
    deleteChild(getElement('.posts'))
      data.forEach((postInfo)=>{
      const post = createElement('div','post');
      const votes = createElement('div','votes');
      const votesUp = createElement('button','votes-up');
      const votesUpIcon = createElement('i','far fa-arrow-alt-up');
      votesUp.appendChild(votesUpIcon);
      const numberVotes = createElement('span','number-votes','0');
      fetch(`/api/v1/votes/count/${postInfo.id}`)
      .then(res=>res.json())
      .then(data=>numberVotes.textContent = data.message)
      .catch(err=>console.log(err))
      const votesDown = createElement('button','votes-down');
      const votesDownIcon = createElement('i','far fa-arrow-alt-down');
      votesDown.appendChild(votesDownIcon);

      votes.append(votesUp,numberVotes,votesDown);
      const content = createElement('div','content');
      const header = createElement('p','header');
      const nameUser = createElement('span','name-user',postInfo.name);
      const time = createElement('time','time',postInfo.created_at.slice(0,10));
      header.append('Posted by ',nameUser,' ', time);

      const desc = createElement('p','desc',postInfo.description);
      const action = createElement('div','action');
      const commentIcon = createElement('div','comment-icon');
      const iconComment = createElement('i','fal fa-comment-alt');
      const share = createElement('div','share');
      const iconShare = createElement('i','fal fa-share');
      share.append(iconShare, 'Share');
      const save = createElement('div','save');
      const iconSave = createElement('i','far fa-bookmark');
      save.append(iconSave, 'Save');
      
      action.append(commentIcon,share,save);
      const comments = createElement('div','comments');
      const addComment = createElement('div','add-comment');
      const form = createElement('form');
      const input = createElement('input');
      input.type = 'text';
      input.name = 'description';
      const addCommentBtn = createElement('button','','add comment');
      addCommentBtn.type = 'button';
      addCommentBtn.id = 'add-comment-button' ;
      const errorComment = createElement('span','error-comment');
      form.append(input, addCommentBtn, errorComment);
      addComment.append(form);
      comments.append(addComment);
      fetch(`/api/v1/post/comments/${postInfo.id}`)
      .then(res=>res.json())
      .then(comm=>{
        if(comm.data) {
          commentIcon.append(iconComment,comm.data.length,'comments');
          comm.data.forEach((ele)=> { 
            const comment = createElement('div','comment');
            const commentBy = createElement('span','comment-by',ele.name);
            const commentContent = createElement('span','comment-content',ele.description);
            comment.append(commentBy,' ', commentContent);
            comments.append(comment);
          })
        }else {
          commentIcon.append(iconComment,0,'comments');
        }
        
      })
      content.append(header, desc, action,comments);
      post.append(votes,content)
      getElement('.posts').appendChild(post);
      addCommentBtn.addEventListener('click',()=> {
        if(input.value === '') {
          errorComment.textContent = 'comment must not empty';
        }else {
          const obj = {
            description:input.value,
            post_id:postInfo.id
          }
          fetch('/api/v1/comments',{
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
          })
          .then(res=>{
            if(res.status === 401){
              window.location.href = '/signIn';
              throw new Error('your are not logged in')
            } else {
              return res.json();
            }
          })
          .then((returnValue)=>{
             const comment = createElement('div','comment');
              const commentBy = createElement('span','comment-by',postInfo.name);
              const commentContent = createElement('span','comment-content',input.value);
              comment.append(commentBy,' ', commentContent);
              comments.append(comment);
          })
          .catch(err=>console.log(err))
        }
        
      })
      votesUp.addEventListener('click',()=> {
        fetch(`/api/v1/votes/up/${postInfo.id}`,)
        .then(res=>{
          if(res.status === 401){
            window.location.href = '/signIn';
          } else {
            return res.json();
          }
        })
        .then((data)=>{
          if(data.message === 'voted successfully :)') {
            numberVotes.textContent++;
          }
          if(data.message === 'You voted before') {
            swal('error', data.message, 'error');
          }
        })
        .catch(err=>console.log(err))
      })
      votesDown.addEventListener('click',()=> {
        fetch(`/api/v1/votes/down/${postInfo.id}`,)
        .then(res=>{
          if(res.status === 401){
            window.location.href = '/signIn';
          } else {
            return res.json();
          }
        })
        .then((data)=>{
         
          if(data.status === 400) {
            swal('error', data.message, 'error');
          }
          if(data.message === 'Vote removed successfully :)') {
            numberVotes.textContent--;
          }
        })
        .catch(err=>console.log(err))
      })
    });
};
