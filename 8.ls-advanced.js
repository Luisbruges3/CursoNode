const pc = require('picocolors')
const fs = require('node:fs/promises')
const path = require('node:path')


const folder = process.argv[2] ?? '.'


async function ls(directory){
    let files
    try{
        files =await  fs.readdir(folder)
    } catch{
        console.error(pc.red(` No se pudo leer el directorio ${folder}`))
        process.exit(1)
    }
    
    const filePromises = files.map(async file =>{
        const filePath = path.join(folder, file)
        let stats
        try {
             stats = await fs.stat(filePath) //status - informacion del archivo
        } catch{
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)} `
    })

    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)