const searchButton = document.querySelector('#search-button')
const searchButtonContent = document.querySelector('#search-button div')

searchButton.addEventListener('click', toogleButton)

function toogleButton() {
    searchButtonContent.classList.toggle('loading')
}