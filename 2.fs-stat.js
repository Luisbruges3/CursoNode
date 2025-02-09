const fs = require('node:fs') //se recomienda poner node antes de fs desde node 16

const stats = fs.statSync('./archivo.txt')
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)