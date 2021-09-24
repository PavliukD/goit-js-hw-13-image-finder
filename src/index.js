import refs from './js/refs'

const { BASE_URL, apiKey, perPage } = refs

async function apiServise(baseUrl, key, perPage){
    let url = `${baseUrl}?key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}&page=1&q=flower`
    let r = await fetch(`${url}`)
    let d = await r.json()
    console.log(d.hits)
    // return d
}


apiServise(BASE_URL, apiKey, perPage)
