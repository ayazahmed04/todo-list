// PREFIX = (nod) 
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const ejs = require('ejs')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))
let lists = ["Buy FOOD", 'Eat FOOD', 'Cook FOOD']

app.get('/', (req, res) => {
    let today = new Date()
    let currentDay = today.getDay()
    let day = ''
    let options = { weekday: 'long', day: 'numeric', month: 'long' }
    day = today.toLocaleDateString('en-US', options)

    res.render('list', { kindOfDay: day, add_elem: lists })
    // console.log(day[3])
})

app.post('/', (req, res) => {
    let list = req.body.list
    lists.push(list)

    // console.log(list)
    // res.render('list', { edd_elem: list })
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('LISTEN at the port 3000')

})