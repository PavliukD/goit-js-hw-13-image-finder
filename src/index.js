import refs from './js/refs'
import apiService from './js/apiService'
import imageCards from './templates/image-card.hbs'

const { input, gallery } = refs
let page = 1
let query = ''
let data =''
let galleryLastChild = input
const options = {
    treshold: 1
}
const observer = new IntersectionObserver(infinityScroll, options)

input.addEventListener('submit', onInput)

async function onInput(e){
    e.preventDefault()
    if (query !== e.target.elements[0].value){
        galleryLastChild = ''
        gallery.innerHTML = ''
        page = 1
        query = e.target.elements[0].value
        data = await apiService(query, page)
        renderElements(data)
        galleryLastChild = gallery.lastChild.previousElementSibling
        observer.observe(galleryLastChild)
        return
    }
}

function renderElements(data){
    gallery.insertAdjacentHTML('beforeend', imageCards(data))
}

async function infinityScroll(entries, observer) {
        entries.forEach(element => {
            if (element.isIntersecting && element.target.firstElementChild.complete){
                getMoreImages()
            }
            
        });
    }
    

async function getMoreImages(){
    page += 1
    data = await apiService(query, page)
    renderElements(data)
    galleryLastChild = gallery.lastChild.previousElementSibling
    observer.observe(galleryLastChild)
}