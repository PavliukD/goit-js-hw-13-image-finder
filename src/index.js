import refs from './js/refs'
import apiService from './js/apiService'
import imageCards from './templates/image-card.hbs'

const { input, gallery } = refs

input.addEventListener('submit', onInput)


async function onInput(e){
    e.preventDefault()
    let query = e.target.elements[0].value
    let data = await apiService(query, 1)
    renderElements(data)
}

function renderElements(data){
    gallery.insertAdjacentHTML('beforeend', imageCards(data))
}