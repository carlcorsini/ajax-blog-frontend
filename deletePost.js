deletePost = id => {
  axios.delete(`${baseURL}/blog/${id}`).then(response => {
    alert("Post deleted!");
    window.location.reload();
  });
};
