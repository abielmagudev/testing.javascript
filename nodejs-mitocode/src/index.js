let myHelloVar = 'Hello from my JS!'

function sayHello()
{
    return `${myHelloVar} ... im function too!`
}

module.exports.myHelloVar = myHelloVar
module.exports.sayHello = sayHello()
module.exports.sayHelloClosure = function () {
    return console.log(myHelloVar + '... im closure function!')
}

module.exports = {
    hola: myHelloVar,
    saludar: () => console.log('Hola mundo desde un objeto exportado a NodeJs')
}

// console.log(module)