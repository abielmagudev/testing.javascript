const fs = require('fs')
console.log('Iniciado')

// Asincrono - Tiene un callback
// fs.readFile('info.txt', 'utf-8', (error, data) => {
//     if( error ) 
//         return console.log(error)

//     return console.log(data)
// })

// Sincrono - No tiene callback
let data = fs.readFileSync('info.txt', 'utf-8')
console.log(data)
console.log('Finalizado')

fs.createReadStream('info.txt').pipe( fs.createWriteStream('info-copiado.txt') )

fs.readdir('./', (error, items) => {
    items.forEach(item => {
        console.log(item)
    })
})

// fs.readdirSync('./').forEach(item => { console.log(item) })