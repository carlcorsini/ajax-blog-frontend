createButtonsList = resultArray => {
  let listGroup = document.querySelector('#list-group')
  resultArray.forEach(a => {
    $('#list-group-item').detach()
    $(listGroup).append(`
      <a href="#/blog/${a.id}"
      class="list-group-item list-group-item-action">
      ${a.title}
      </a>`)
  })
  let listGroupItems = document.querySelectorAll('.list-group-item')
  listGroupItems.forEach(a => {
    a.addEventListener('click', event => {
      let almostId = event.target.href.split('/blog/')
      let id = almostId[1]
      fillPostTitleAndBody(view, id)
      $('#view-post').detach()
      $('#post-form').remove()
    })
  })
}
