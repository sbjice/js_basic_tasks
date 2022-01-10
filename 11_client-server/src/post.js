(async () => {
  const API = 'https://gorest.co.in/public/v1/posts';
  const COMMENTS_API = 'https://gorest.co.in/public-api/comments'

  async function getPost(postID = 1) {
    const response = await fetch(API + '?id=' + postID);
    return await response.json();
  }
  // const post = await getPost(15);
  // console.log(post);
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

  function createPost(post) {
    const article = document.createElement('article');
    article.classList.add('p-3', 'w-75');
    const articleHeader = document.createElement('h3');
    articleHeader.textContent = post.title;
    const articleBody = document.createElement('p');
    articleBody.textContent = post.body;
    article.append(articleHeader, articleBody);
    return article;
  }

  async function loadPostPage(selector, title) {
    const container = createContainer(selector);
    const headTitle = createTitle(title);
    container.append(headTitle);

    const pageParams = new URLSearchParams(window.location.search);
    const id = pageParams.get('id');

    const post = await getPost(id);
    const comments = await getComments(id);
    const article = createPost(post.data[0]);

    console.log(comments);
    container.append(article);
  }

  window.loadPostPage = loadPostPage;

})();
