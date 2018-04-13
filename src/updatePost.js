updatePost = (editTitle, editContent, id) => {
  axios
    .put(`${baseURL}/blog/${id}`, {
      editTitle,
      editContent
    })
    .then(response => {
      window.location.reload()
    })
}
