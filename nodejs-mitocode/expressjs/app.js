const express = require('express')
const app = express()

// Middlewares

// Mid-2
let nextMiddleware = (req, res, next) => {
    console.log('Next middleware...');
    next()
}

let showIp = (req, res, next) => {
    console.log('IP: 0.0.0.0');
    next()
}

// Mid-1
let isLogin = () => true;
app.use( (req, res, next) => {
    if( isLogin() ) next() // next() middleware passed

    res.send('Not authorized')
}, nextMiddleware)

// Mid-3
app.use(showIp)

// Http verbs
app.get('/:user', (req, res) => {
    let user = req.params.user
    res.send(`Welcome ${user}`)
})

app.get('/', (req, res) => {
    res.send('Hello world from ExpressJs - ' + req.method )
})
app.post('/', (req, res) => {
    res.send('Hello world from ExpressJs - ' + req.method )
})
app.put('/', (req, res) => {
    res.send('Hello world from ExpressJs - ' + req.method )
})
app.patch('/', (req, res) => {
    res.send('Hello world from ExpressJs - ' + req.method )
})
app.delete('/', (req, res) => {
    res.send('Hello world from ExpressJs - ' + req.method )
})

app.listen(3000, () => {
    console.log('Listening on port 3000 ')
})