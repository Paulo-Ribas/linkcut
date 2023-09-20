const Sequelize = require('sequelize')
const connection = require('./database')


const NewLinkName = connection.define('createdurlName2s', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    fullLink: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    numeration: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    urlCompleta: {
        type: Sequelize.TEXT,
        allowNull: false

    }
})

NewLinkName.sync({ force: false }).then(() => { })
module.exports = NewLinkName