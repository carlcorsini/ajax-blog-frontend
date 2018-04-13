deletePost = id => {
  axios.delete(`${baseURL}/blog/${id}`).then(response => {
    window.location.reload()
  })
}
