getAllPosts = () => {
  axios.get(`${baseURL}/blog`).then(response => {
    let resultArray = response.data.result
    createButtonsList(resultArray)
  })
}
