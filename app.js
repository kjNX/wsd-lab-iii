require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const app = express()

const HTTP_PORT = process.env.PORT
const MAIN_DATA = {
    name: 'Kevin Uscata',
    title: 'Curso de Node'
}

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))
app.get('/', (req, res) => {
    // res.send('Home page!')
    res.render('home', MAIN_DATA)
})

/*
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo!')
})
*/

app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', MAIN_DATA)
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', MAIN_DATA)
})

app.get('/salidas', (req, res) => {
    res.render('salidas', MAIN_DATA)
})

app.get('*', (req, res) => {
    // res.send('404|page not found')
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(HTTP_PORT, () => {
    console.log(`Listening on http://localhost:${HTTP_PORT}`)
})
