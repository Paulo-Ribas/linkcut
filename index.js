const connection = require('./database/database')
const NewUrl = require('./database/link')
const NewUrlName = require('./database/linkName')
const express = require('express')
const router1 = require('./linkRedirect/generateLink')
const router2 = require('./linkRedirect/redirect')
const router3 = require('./linkRedirect/generateLinkName')
const router4 = require('./linkRedirect/generateUniqueURL')
const router5 = require('./linkRedirect/generateUniqueURL_Name')
const app = express()


connection.authenticate().then(()=> console.log('connected')).catch(()=>{console.log('erro ao conectar')})
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/lr', router1)
app.use('/linkCut', router2)
app.use('/ln', router3)
app.use('/lrAD', router4)
app.use('/lnAD', router5)

app.get('/Sobre-Nos',(req, res) =>{
    return res.render('SobreNos')
})
app.get('/Privacity_politic', (req, res) => {
    return res.render('PoliticaDePrivacidade')
})
app.get('/Urladvanced', (req, res) => {
    return res.render('urlAd', {
        erro: null,
    })
})
app.get('/:parte1?/:parte2?', (req , res) => {
    const part1 = req.params.parte1
    const part2 = req.params.parte2
    if (part2) {
            NewUrlName.findOne({ where: { urlCompleta: part1 + '/' + part2 } }).then(red => {
                if (red) {
                    return res.redirect(red.fullLink)
                }
            })
    }
    if (part1) {   
            NewUrl.findOne({ where: { cutLink: part1 } }).then(red => {
                if (red) {
                    return res.redirect(red.fullLink)
                }
            }) 
        }
    else {
        res.render('index', {
            erro: null
        
        })
    }
})


app.listen(2222)
