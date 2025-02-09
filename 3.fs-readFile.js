//Asincrono callback
const fs = require('node:fs')

console.log('leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{ //lee el archivo, codificalo y ejecuta la funcion cuando termines de leer
    console.log('priemr texto: ',text)
})

console.log('--> hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text)=>{
    console.log('segundo texto: ',text)
})

