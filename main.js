let baseURL = "https://hidden-waters-39451.herokuapp.com";

checkTextBoxes = (title, body) => {
  if (title.length < 1 || body.length < 1) {
    errors.style.display = "block";
    errors.innerHTML = "no name or title entered";
  }
};

document.addEventListener("DOMContentLoaded", event => {
  let listGroup = document.querySelector("#list-group");
  let postTitle = document.querySelector("#post-title");
  let postBody = document.querySelector("#post-body");
  let viewPost = document.querySelector("#view-post");
  let view = document.querySelector("#view");
  let errors = document.querySelector("#errors");
  axios.get(`${baseURL}/blog`).then(response => {
    let resultArray = response.data.result;
    resultArray.forEach(a => {
      $("#list-group-item").detach();
      $(listGroup).append(`
      <a href="#/blog/${a.id}" data-postid="${
        a.id
      }" class="list-group-item list-group-item-action">
        ${a.title}
      </a>`);
    });
    let listGroupItems = document.querySelectorAll(".list-group-item");

    listGroupItems.forEach(a => {
      a.addEventListener("click", event => {
        $("#view-post").detach();
        $("#post-form").remove();
        axios.get(`${baseURL}/blog/${a.dataset.postid}`).then(response => {
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
          );
          $("#edit-post").click(() => {
            $("#post-form").remove();
            $("#view-post").detach();
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
              <button id="update-button" type="button" class="btn btn-info btn-large">Update Post</button>
              </form>
              `);

            $("#update-button").click(() => {
              let editTitle = document.querySelector("#edit-post-title").value;
              let editContent = document.querySelector("#edit-post-body").value;
              updatePost(editTitle, editContent, a.dataset.postid);
            });
          });

          $("#delete-post").click(() => {
            deletePost(a.dataset.postid);
          });
        });
      });
    });
  });

  // create form
  let createPostDiv = document.querySelector("#create-post-button");
  $(createPostDiv).click(event => {
    $("#post-form").remove();
    $("#view-post").detach();
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
      `);

    $("#submit-button").click(() => {
      let newPostTitle = document.querySelector("#new-post-title").value;
      let newPostBody = document.querySelector("#new-post-body").value;
      checkTextBoxes(newPostTitle, newPostBody),
        createPost(newPostTitle, newPostBody);
    });
  });
});
