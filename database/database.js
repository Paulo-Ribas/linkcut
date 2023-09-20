const Sequelize = require('sequelize')
const env = require('dotenv')
env.config()
const connection = new Sequelize('links', 'root', process.env.DB_PASS, {
    host: 'localhost', // onde está rodando o sql
    dialect:'mysql' //tipo de banco de dados que irá se conectar

}) 

module.exports = connection

