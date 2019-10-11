const _ = require('lodash')
const yargs = require('yargs')

let objects = [
    {name: 'Leopoldo', alias: 'Polo', edad: 23},
    {name: 'Francisco', alias: 'Paco', edad: 23},
    {name: 'Leticia', alias: 'Lety', edad: 40}
]
var result = _.find(objects, {edad: 23})

let comand = process.argv
let isAuth = comand[2] !== undefined ? 'authorized' : 'reject' // node app.js autorized

if( isAuth === 'authorized' )
{
    console.log('Comand: ' + result)
}

// Yargs = node app.js --auth=success | --auth success
if( yargs.argv.auth === 'success' )
{
    console.log('Yargs: ' + JSON.stringify(result))
} 

// console.log(yargs)
// console.log(comand)