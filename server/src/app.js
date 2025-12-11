const express = require('express')
const cors = require('cors')
const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));



const {readRecipies,suggestedRecipie} = require('./routes/recipie_route')
app.use(readRecipies)
app.use(suggestedRecipie)
console.log("app.js is running")

module.exports = app

