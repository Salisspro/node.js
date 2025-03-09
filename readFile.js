
import fs from 'fs'

fs.readFile('./text.txt', 'utf8', (err, data) => {
   if (err) throw err;
   console.log(data)
})

//asychronous

// const data = fs.readFileSync('./text.txt', 'utf8')
// console.log(data)