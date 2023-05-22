const fs = require('fs');

const readWriteFunction = () => {
    fs.readFile('./NodeBasic/data.txt', (err, data) => {   //write full path name in NODEJSREPO space
        if(err){
            console.log('err', err)
        } else {
            console.log('read data', data.toString())
        }
    });
    
    console.log('last line')
    
    fs.writeFile('./NodeBasic/read.txt', ("Hello, story completed now. You can read it. Successful"), () => {
        console.log('data written')    
    })

    if(!fs.existsSync('./images')){
        fs.mkdir('./images', (err) => {
            if(err){
                console.log('err', err)
            } else {
                console.log('directory created')
            }
        })
    } else {
        fs.rmdir('./images', (err) => {    //remove directory
            if(err){
                console.log('rm err', err)
            } else {
                console.log('deleted')
            }
        });
    }

    fs.rename('./assets', "./Assets", (err) => {  // rename direcotory
        if(err){
           console.log('err', err)
        }
        console.log('renamed')
    })
}

module.exports = { readWriteFunction };