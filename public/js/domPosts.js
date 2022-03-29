/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const renderComments = () => {
    const comments = createElement('div','comments');
    const addComment = createElement('div','add-comment');
    const form = createElement('form');
    const input = createElement('input');
    input.type = 'text';
    input.name = 'description';
    const addCommentBtn = createElement('button','','add comment');
    addCommentBtn.type = 'button';
    addCommentBtn.id = 'add-comment-button' ;
    form.append(input, addCommentBtn);
    addComment.append(form);
    const comment = createElement('div','comment');
    const commentBy = createElement('span','comment-by','isaam');
    const commentContent = createElement('span','comment-content','nice');
    comment.append(commentBy, commentContent);
    comments.append(addComment,comment);

    return comments;

}

  const renderPosts = (data) => {
      data.forEach((postInfo)=>{
      const post = createElement('div','post');
      const votes = createElement('div','votes');
      const votesUp = createElement('button','votes-up');
      const votesUpIcon = createElement('i','far fa-arrow-alt-up');
      votesUp.appendChild(votesUpIcon);
      const numberVotes = createElement('span','number-votes','0');
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
      commentIcon.append(iconComment,'58comments');
      const share = createElement('div','share');
      const iconShare = createElement('i','fal fa-share');
      share.append(iconShare, 'Share');
      const save = createElement('div','save');
      const iconSave = createElement('i','far fa-bookmark');
      save.append(iconSave, 'Save');
      
      action.append(commentIcon,share,save);
     const  comments = renderComments(data);
      content.append(header, desc, action,comments);
      post.append(votes,content)
      getElement('.posts').appendChild(post);
     
    });
}

