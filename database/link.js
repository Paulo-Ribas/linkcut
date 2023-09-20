const Sequelize = require('sequelize')
const connection = require('./database')


const NewLink = connection.define('createdurl',{
    cutLink: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    fullLink: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

NewLink.sync({force:false}).then(()=>{}) // sincroniza com o banco de dados e cria a tabela, e o force é para forçar ou nao a criação caso já tabela já exista/esteja criada
module.exports = NewLink