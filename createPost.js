createPost = (title, content) => {
  axios
    .post(`${baseURL}/blog`, {
      title,
      content
    })
    .then(response => {
      alert("Post created!");
      window.location.reload();
    });
};
