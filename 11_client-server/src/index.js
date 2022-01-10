(async () => {
  const API = 'https://gorest.co.in/public/v1/posts';

  async function getPostsList(pageNumber = 1) {
    const response = await fetch(API + '?page=' + pageNumber);
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

  function createPagePostsList(postsList = []) {
    const pagePostsList = document.createElement('ul');
    pagePostsList.classList.add('list-group', 'w-75', 'p-3', 'border', 'border-light', 'mb-3');
    postsList.forEach((post, index, array) => {
      addPostToPostsList(post, pagePostsList);
    })
    return pagePostsList;
  }

  function createPagination(paginationData) {
    const paginationDiv = document.createElement('div');
    if (paginationData.page === 1) {
      paginationDiv.classList.add('w-25', 'border', 'border-primary', 'p-3', 'd-flex', 'align-items-center', 'justify-content-center', 'rounded', 'mb-3');
      const forwardLink = document.createElement('a');
      forwardLink.textContent = 'Следующая страница'
      forwardLink.href = './index.html?page=' + (paginationData.page + 1);
      paginationDiv.append(forwardLink);
    } else if (paginationData.page === paginationData.pages){
      paginationDiv.classList.add('w-25', 'border', 'border-primary', 'p-3', 'd-flex', 'align-items-center', 'justify-content-center', 'rounded', 'mb-3');
      const forwardLink = document.createElement('a');
      forwardLink.textContent = 'Предыдущая страница'
      forwardLink.href = './index.html?page=' + (paginationData.page - 1);
      paginationDiv.append(forwardLink);
    } else {
      paginationDiv.classList.add('mw-50', 'border', 'border-primary', 'p-3', 'd-flex', 'align-items-center', 'justify-content-between', 'rounded', 'mb-3');
      const forwardLink = document.createElement('a');
      forwardLink.classList.add('d-flex', 'px-2');
      forwardLink.textContent = 'Предыдущая страница'
      if (paginationData.page - 1 === 1) {
        forwardLink.href = './index.html';
      } else {
        forwardLink.href = './index.html?page=' + (paginationData.page - 1);
      }
      const backwardLink = document.createElement('a');
      backwardLink.classList.add('d-flex', 'px-2');
      backwardLink.textContent = 'Следующая страница'
      backwardLink.href = './index.html?page=' + (paginationData.page + 1);
      paginationDiv.append(forwardLink, backwardLink);
    }
    return paginationDiv;
  }

  function addPostToPostsList(post, postsList) {
    const postElement = document.createElement('li');
    postElement.classList.add('list-group-item', 'border', 'border-dark', 'p-1');
    const postLink = document.createElement('a');
    postLink.textContent = post.title;
    postLink.href = './post.html?id=' + post.id;
    postLink.target = '_blank';
    postElement.append(postLink);
    postsList.append(postElement);
  }

  async function startApp(selector, title) {
    const container = createContainer(selector);
    const headTitle = createTitle(title);
    container.append(headTitle);

    const pageParams = new URLSearchParams(window.location.search);
    const page = pageParams.get('page') < 1 ? 1 : pageParams.get('page');

    const postsList = await getPostsList(page || 1);
    const pagePostsList = createPagePostsList(postsList.data);
    const pagination = createPagination(postsList.meta.pagination);
    console.log(postsList);

    container.append(pagePostsList);
    container.append(pagination);
  }

  window.startApp = startApp;

})();
