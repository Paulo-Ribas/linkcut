const NewUrl = require('../database/link')
const express = require('express')
const router = express.Router()
let count = 0

router.post('/', (req, res) => {
    const url = req.body.Url
    const Name = req.body.Nome
    let existe = false
    if (url === undefined || url === null) {
        return res.render('urlAd', {
            erro: 'Sua Url Estava Incorreta'
        })

    }
    if (Name === undefined || Name === null) {
        return res.render('urlAd', {
            erro: 'Forneça Um Nome Valido'
        })
    }
    for (const l of Name) {

        if (l === ' ' || l === '!' || l === '=' || l === '/' || l === '(' || l === '{' || l === ')' || l === '}' || l === '*') {
            return res.render('urlAd', {
                erro: 'Forneça Um Nome Valido'
            })
        }
    }

    if (url.substring(0, 4) === 'http' || url.substring(0, 5) === 'data:' || url.substring(0, 6) === 'bit.ly/') {
        function criarURLNameUnique() {
            NewUrl.findOne({ where: { cutLink: Name}}).then(found =>{
                if (found) {
                    return res.render('urlAd', {
                        erro: 'esse Nome já foi usado por outra pessoa'
                    })
                }
                else {
                    NewUrl.create({
                        cutLink: Name,
                        fullLink: url
                    }).then(()=>{
                        res.render('Link', {
                            Link: Name,
                            numeration: null,
                            bar: null
                        })
                    })
                }

             })
        }

        return criarURLNameUnique()
    }

})


module.exports = router