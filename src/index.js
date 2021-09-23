import { refs } from './js/refs'


fetch(`${refs.BASE_URL}?key=${refs.apiKey}&image_type=photo&orientation=horizontal&per_page=${refs.perPage}&page=1&q=flower`).then(r => console.log(r)).then()
