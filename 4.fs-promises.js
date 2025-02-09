//en los modulos que no tienen promesas nativas 
//se puede utilizar promisify de la siguiente forma
//const {promisify}=reuire('node:util')
//const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

console.log('leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text=>{
        console.log('primer texto: ', text) //es lo mismo pero en vez de usas callbacks, se utilizan promesas
    })

console.log('--> hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text=>{
        console.log('segundo texto: ', text)
    })
