//en los modulos que no tienen promesas nativas 
//se puede utilizar promisify de la siguiente forma
//const {promisify}=reuire('node:util')
//const readFilePromise = promisify(fs.readFile)

import {readFile} from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text,secondText]) => {
    console.log('primer texto: ', text)
    console.log('segundo texto: ', secondText)
})
