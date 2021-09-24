import refs from './refs'

const { BASE_URL, apiKey, perPage } = refs

export default class APIServise(){
 constructor(){
     this.baseUrl = BASE_URL
     this.key = apiKey
     this.pPage = perPage

 }

 async getFetch(){
    let url = `${this.baseUrl}?key=${this.key}&image_type=photo&orientation=horizontal&per_page=${this.pPage}&page=1&q=flower`
    let r = await fetch(`${url}`)
    let d = await r.json()
    console.log(d.hits)
    return d.hits
 }

}