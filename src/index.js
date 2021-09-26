import refs from './js/refs'
import APIServise from './js/apiService'

const { input, gallery } = refs

console.log(input)

input.addEventListener('submit', onInput)


function onInput(e){
    e.preventDefault()
    console.dir(e.target.elements[0].value)
    console.log(APIServise.getFetch(e.target.elements[0].value, 1))
}