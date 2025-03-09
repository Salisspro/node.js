import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'


const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename, __dirname)

const name = `This is a current year i started learning node.js`

const data = new Date().getFullYear()

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html'
   )
   res.statusCode = 200
   res.end(`<h1>${name} ${data}</h1>`)
   console.log(req.url)
   console.log(req.method)
})

server.listen(PORT, () => {
   console.log(`server is running on port ${PORT}`)

})

console.log(`server is running`)

