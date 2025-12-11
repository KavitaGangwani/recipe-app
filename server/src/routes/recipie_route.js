const express = require('express')
 const {getRecipies} = require('./../controllers/recipie_controller')
 const { suggestRecipie} = require('./../controllers/ai_recipie')

const router = express.Router();

const readRecipies = router.get('/recipes/all',getRecipies);


// AI route

const suggestedRecipie = router.post('/recipe/suggest', suggestRecipie)

module.exports = {readRecipies,suggestedRecipie}

