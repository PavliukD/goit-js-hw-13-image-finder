import refs from './refs'

const { BASE_URL, apiKey, perPage } = refs



 export default async function apiService(query, page){
    let url = `${BASE_URL}?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}&page=${page}&q=${query}`
    let response = await fetch(`${url}`)
    let data = await response.json()
    return data.hits
 }

