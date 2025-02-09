import os from 'node:os'

console.log('Informacion del sistema operativo:')
console.log('--------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura del sistema operativo', os.arch())
console.log('CPUs del sistema operativo', os.cpus()) //vamos a poder escalar procesos en Node.js
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() /60/ 60)