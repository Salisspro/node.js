import http from 'http'
import path from 'path';
import fs from 'fs/promises'
import url from 'url'
const PORT = process.env.PORT2


const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const server = http.createServer(async (req, res) => {
   try {
      if (req.method === 'GET') {
         let filePath;
         if (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html');
         }
         else if (req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html');
         } else {
            throw new Error(`Not found`)
         }

         const data = await fs.readFile(filePath)
         res.setHeader('Content-Type', 'text/html')
         res.write(data)
         res.end()
         console.error('err ', err);
      }

   } catch (err) {

   }
})

server.listen(PORT, () => {
   console.log(`server listening on ${PORT}`)
})