createPost = (title, body) => {
  axios
    .post(`${baseURL}/blog`, {
      title,
      body
    })
    .then(response => {
      alert("Post created!");
      window.location.reload();
    });
};
