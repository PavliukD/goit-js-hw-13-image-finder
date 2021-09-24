import refs from './refs'

const { BASE_URL, apiKey, perPage } = refs

export default class APIServise(){
 constructor(input, page){
     this.baseUrl = BASE_URL
     this.key = apiKey
     this.pPage = perPage
     this.input = input
     this.page = page

 }

 async getFetch(){
    let url = `${this.baseUrl}?key=${this.key}&image_type=photo&orientation=horizontal&per_page=${this.pPage}&page=${this.page}&q=${this.input}`
    let r = await fetch(`${url}`)
    let d = await r.json()
    console.log(d.hits)
    return d.hits
 }

}