const express = require('express')

const server = express()

const welcomeRouter = require('./welcome/welcome-router')
const recipeRouter = require('./recipe-book/recipe-router')

server.use(express.json())

server.use('/api', welcomeRouter)
server.use('/api/recipes', recipeRouter)

module.exports = server