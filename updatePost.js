updatePost = (editTitle, editContent, id) => {
  axios
    .put(`${baseURL}/blog/${id}`, {
      editTitle,
      editContent
    })
    .then(response => {
      alert("Post updated!");
      window.location.reload();
    });
};
