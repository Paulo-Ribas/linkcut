const express = require('express')
const router = express.Router()
const NewUrl = require('../database/link')
const NewUrlName = require('../database/linkName')


router.get('/:parte1?/:parte2?', (req,res)=> {
    const part1 = req.params.parte1
    const part2 = req.params.parte2
    if (part2) {  
        NewUrlName.findOne({where:{urlCompleta: part1 + '/' + part2 }}).then( red => {
            res.redirect(red.fullLink)
        })
    }
    else {
        NewUrl.findOne({where: {cutLink: part1}}).then(red => {
            if(red) {
                res.redirect(red.fullLink)
            }
        })
    }
}) 

module.exports = router