fillPostTitleAndBody = (view, id) => {
  axios.get(`${baseURL}/blog/${id}`).then(response => {
    $(view).append(
      `
      <section id="view-post">
      <header>
      <h2 id="post-title">${response.data.result.title}</h2>
      <hr>
      </header>
      <article>
      <p id="post-body">${response.data.result.content}</p>
      </article>
      <aside class="my-4">
      <ul class="nav justify-content-end">
      <li class="nav-item">
      <a class="nav-link" id="edit-post" href="#">Edit</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-danger" id="delete-post" href="#">Delete</a>
      </li>
      </ul>
      </aside>
      </section>`
    )
    $('#delete-post').click(() => {
      console.log('whats goog')
      deletePost(id)
    })
    $('#edit-post').click(() => {
      $('#post-form').remove()
      $('#view-post').detach()
      $(view).append(`
        <form id="post-form" action="/posts/">
        <div class="form-group">
        <label for="title">Title</label>
        <input id="edit-post-title" type="text" class="form-control" value="${
          response.data.result.title
        }">
        </div>
        <div class="form-group">
        <label for="title">Content</label>
        <textarea id="edit-post-body" type="text" rows="6" class="form-control">${
          response.data.result.content
        }</textarea>
        </div>
        <button data-id="${id}" id="update-button" type="button" class="btn btn-info btn-large">Update Post</button>
        </form>
        `)
      $('#update-button').click(() => {
        let editTitle = document.querySelector('#edit-post-title').value
        let editContent = document.querySelector('#edit-post-body').value
        updatePost(editTitle, editContent, id)
      })
    })
  })
}
