(async () => {
  const API = 'https://gorest.co.in/public/v1/posts';
  const COMMENTS_API = 'https://gorest.co.in/public-api/comments'

  async function getPost(postID = 1) {
    const response = await fetch(API + '?id=' + postID);
    return await response.json();
  }

  async function getComments(postID = 1) {
    const response = await fetch(COMMENTS_API + '?post_id=' + postID);
    return await response.json();
  }

  function createContainer(selector) {
    const container = selector;
    container.classList.add('mt-5', 'mb-5', 'p-1', 'bg-light', 'border', 'border-primary', 'rounded',
                            'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');
    return container;
  }

  function createTitle(title) {
    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.classList.add('align-items-center', 'justify-content-center', 'd-flex', 'mb-3');
    return titleElement;
  }

  function createPostElement(post) {
    const article = document.createElement('article');
    article.classList.add('p-3', 'w-75');
    const articleHeader = document.createElement('h1');
    if (post) {
      articleHeader.textContent = post.title;
      const articleBody = document.createElement('p');
      articleBody.textContent = post.body;
      article.append(articleHeader, articleBody);
    } else {
      articleHeader.textContent = 'Post Not Found';
      article.append(articleHeader);
    }
    return article;
  }

  function createCommentsElement(commentsData) {
    const commentsDiv = document.createElement('div');
    commentsDiv.classList.add('w-50', 'border', 'border-primary', 'p-3', 'd-flex', 'align-items-center', 'justify-content-center', 'rounded', 'mb-3', 'flex-column');
    const commentsHeader = document.createElement('h2');
    commentsHeader.textContent = 'Комментарии:';
    const commentsList = document.createElement('ul');
    commentsList.classList.add('d-flex', 'p-1', 'mb-0', 'w-100', 'flex-column');
    commentsDiv.append(commentsHeader);
    if(commentsData) {
      commentsData.forEach((comment, index, array) => {
        commentsList.append(createCommentElement(comment));
      });
    }
    commentsDiv.append(commentsList);

    return commentsDiv;
  }

  function createCommentElement(comment) {
    const commentElement = document.createElement('li');
    commentElement.classList.add('w-100', 'p-2', 'd-flex', 'border', 'border-primary', 'rounded', 'align-items-left', 'justify-content-center', 'flex-column');
    const name = document.createElement('h3');
    name.textContent = comment.name;
    const text = document.createElement('p');
    text.textContent = comment.body;
    commentElement.append(name, text);
    return commentElement;
  }

  async function loadPostPage(selector, title) {
    const container = createContainer(selector);
    const headTitle = createTitle(title);
    container.append(headTitle);

    const pageParams = new URLSearchParams(window.location.search);
    const id = pageParams.get('id');

    const post = await getPost(id);
    const comments = await getComments(id);
    const postElement = createPostElement(post.data[0]);
    const commentsElement = createCommentsElement(comments.data);

    container.append(postElement);
    container.append(commentsElement);
  }

  window.loadPostPage = loadPostPage;

})();
