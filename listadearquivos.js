const fs = require('fs')
function readdir(path){
    return new Promise((resolve, reject)=>{
        fs.readdir(path, (err,stat)=> {
            if(err){
                reject(err);
            }else{
                resolve(stat)
            }
        })
    })
}
function stat(path){
    return new Promise((resolve, reject)=>{
        fs.stat(path, (err,stat)=>{
            if(err){
                reject(err);
            }else{
                resolve({path, stat})
            }
        })
    })
}

async function lista(){
    const paths = await readdir('./')
    const statsPromises = paths.map(async(path)=> await stat(path))
    const stats = await Promise.all(statsPromises)
    const pathWithIsFile = stats.map(path => ({path: path.path, isFile: path.stat.isFile()}))
    const files = pathWithIsFile.filter(path => path.isFile) 
    //console.log(files)
}
lista()

