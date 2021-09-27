import refs from './js/refs'
import apiService from './js/apiService'
import imageCards from './templates/image-card.hbs'

const { input, gallery } = refs
let page = 1
let query = ''

input.addEventListener('submit', onInput)


async function onInput(e){
    e.preventDefault()
    if (query !== e.target.elements[0].value){
        gallery.innerHTML = ''
        page = 1
        query = e.target.elements[0].value
        let data = await apiService(query, page)
        renderElements(data)
        return
    }
    // query = e.target.elements[0].value
    // let data = await apiService(query, page)
    // renderElements(data)
}

function renderElements(data){
    gallery.insertAdjacentHTML('beforeend', imageCards(data))
}