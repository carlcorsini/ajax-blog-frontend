checkTextBoxes = (title, body) => {
  let errors = document.querySelector('#errors')
  if (title.length < 1 && body.length < 1) {
    errorFader(errors, 'You Silly Goose, Title and Content Fields Empty')
  } else if (title.length < 1) {
    errorFader(errors, 'Title Field Empty.')
  } else if (body.length < 1) {
    errorFader(errors, 'Content Field Empy')
  }
}
