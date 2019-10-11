const express = require('express')
const app = express()

let people = [
    {id: 1, name: 'Abraham'},
    {id: 2, name: 'Jacob'},
    {id: 3, name: 'Issac'},
]

app.listen(3000, () => {
    console.log('Listening on port 3000 ')
})

app.get('/', (req, res) => {
    res.send('Welcome...')
})

app.set('view engine', 'pug')
app.get('/pug', (req, res) => {
    res.render('index', {h1_page: 'Engine template: PUG', people: people})
})

// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({ /* config */ });
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.get('/hbs', (req, res) => {
//     res.render('index', {h1_page: 'Engine template: HBS', people: people})
// })