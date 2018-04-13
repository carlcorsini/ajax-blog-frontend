viewPost = (view, title, content) => {
  $(view).append(`
  <form id="post-form" action="/posts/">
  <div class="form-group">
  <label for="title">Title</label>
  <input id="edit-post-title" type="text" class="form-control" value="${title}">
  </div>
  <div class="form-group">
  <label for="title">Content</label>
  <textarea id="edit-post-body" type="text" rows="6" class="form-control">${content}</textarea>
  </div>
  <button id="update-button" type="button" class="btn btn-info btn-large">Update Post</button>
  </form>
  `);
};
