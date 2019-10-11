const os = require('os')
const fs = require('fs')

let content = 'Hello from node-module! CPU: ' + os.cpus()[0].model;
fs.appendFile('createdByNodeJs.txt', content, function (error) {
    if( error )
        console.log(error)
})

