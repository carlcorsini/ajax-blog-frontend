createPostDivFunction = () => {
  let createPostDiv = document.querySelector('#create-post-button')
  $(createPostDiv).click(event => {
    $('#post-form').remove()
    $('#view-post').detach()
    $(view).append(`
    <form id="post-form" action="/posts/">
    <div class="form-group">
    <label for="title">Title</label>
    <input id="new-post-title" type="text" class="form-control" value="">
    </div>
    <div class="form-group">
    <label for="title">Content</label>
    <textarea id="new-post-body" type="text" rows="6" class="form-control"></textarea>
    </div>
    <button id="submit-button" type="button" class="btn btn-info btn-large">Create New Post</button>
    </form>
    `)

    $('#submit-button').click(() => {
      let newPostTitle = document.querySelector('#new-post-title').value
      let newPostBody = document.querySelector('#new-post-body').value
      checkTextBoxes(newPostTitle, newPostBody)
      createPost(newPostTitle, newPostBody)
    })
  })
}
