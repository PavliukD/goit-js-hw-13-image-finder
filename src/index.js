import refs from './js/refs'

const { input, galley } = refs

input.addEventListener('submit', onInput)


function onInput(e){
    e.preventDefault()
    console.log(e.target.elements.search.value)
}