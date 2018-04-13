createPost = (title, content) => {
  axios
    .post(`${baseURL}/blog`, {
      title,
      content
    })
    .then(response => {
      window.location.replace('index.html')
    })
}
