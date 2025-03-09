
import url from 'url'

const urlString = 'https://www.google.com/search?q=hello+world'
const urlObject = new URL(urlString)

console.log(urlObject)