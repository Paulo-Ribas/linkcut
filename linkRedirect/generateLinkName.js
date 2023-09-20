const NewUrlName = require('../database/linkName')
const express = require('express')
const router = express.Router()
let count = 0

router.post('/', (req, res) => {
    const Name = req.body.Nome
    const url = req.body.Url
    let existe = false

    if(url === undefined || url === null) {
        return  res.render('index', {
            erro: 'Sua Url Estava Incorreta'
        })

    }
    if(Name === undefined || Name === null) {
        return res.render('index', {
            erro: 'Forneça Um Nome Valido'
        })
    }
    for (const l of Name) {
        
        if (l === ' ' || l === '!' || l === '=' || l === '/' || l === '(' || l === '{' || l === ')' || l === '}' || l === '*') {
            return res.render('index', {
                erro: 'Forneça Um Nome Valido'
            })   
    }
    }
    let Numeration = parseInt(Math.random() * 100 + 101 - 100)

    if (url.substring(0, 4) === 'http' || url.substring(0, 5) === 'data:' || url.substring(0, 6) === 'bit.ly/'){
        function GerarLinkName(novaNumeration, ...NumerosProibidos) { 
            if (novaNumeration) {
                Numeration = novaNumeration
                console.log('esta funcionando a troca de numeração')
            }
        
            NewUrlName.findAll({where:{name: Name}}).then(found => {
                if(found) {
                     found.forEach(link => {
                        if (link.fullLink === url) {
                            existe = true
                            console.log(existe, 1)
                            res.render('Link', {
                                Link: link.name,
                                numeration: link.numeration,
                                bar: '/'
                            })
                     
                        }
                    });
                 }
            })
            console.log(NumerosProibidos)
                NewUrlName.findOne({where:{name: Name, numeration: Numeration}}).then(found => {
                    if (found) {
                        console.log(existe, 3)
                        if (count <= 33) {
                            console.log(1)
                            console.log(count)
                            count = count + 1
                            NumerosProibidos.push(Numeration)
                            return GerarLinkName(null, NumerosProibidos)     
                        }
                        if (count > 33 && count <= 43) {
                            count = count + 1
                            console.log(count)
                            function GerarNovaNumeration(count = 0, ...numerosProibidos) {
                                Numeration = parseInt(Math.random() * (1000 - 100) + 100)
                                console.log('esta funcionando perfeitamente', 1000000000)
                                numerosProibidos.map(numero => {
                                    if (numero === Numeration) {
                                        count = count + 1
                                        numerosProibidos.push(Numeration)
                                        if(count > 1) {
                                            console.log('é aqui o problema?')
                                            return GerarLinkName(null, numerosProibidos)
                                        }
                                        return GerarNovaNumeration(count, numerosProibidos)
                                        
                                    }
                                })
                                return GerarLinkName(Numeration, numerosProibidos)
                                
                            }
                            return GerarNovaNumeration(NumerosProibidos)
                        }
                        if (count > 43 && count < 53) {
                            console.log(3, 'chegou até aqui')
                            function GerarNovaNumerationSuprema( count = 0, ...numerosProibidos) {
                                Numeration = parseInt(Math.random() * (10000 - 1000) + 1000)
                                numerosProibidos.map(numero => {
                                    if (numero === Numeration) {
                                        count = count + 1
                                        numerosProibidos.push(Numeration)
                                        if (count > 1) {
                                            console.log(' ou é aqui o problema? O GRANDE COUNT')
                                            return GerarLinkName(null, numerosProibidos)
                                        }
                                        return GerarNovaNumerationSuprema(count, numerosProibidos)
    
                                    }
                                })
                                console.log(Numeration)
                                return GerarLinkName(Numeration, numerosProibidos)
                                
                            }
                            return GerarNovaNumerationSuprema(0, NumerosProibidos)
                            
                        }
                        if (count >= 54) {
                            return res.render('index', {
                                erro: 'não foram encontradas combinações para o novo link, problema será resolvido dentro de poucos dias'
                            })
                        }
        
                        
                    }
                    else {
                        console.log(existe)
                        if (existe === false) {  
                            console.log('veio até aqui?', existe) 
                            NewUrlName.create({
                                name: Name,
                                fullLink: url,
                                numeration: Numeration,
                                urlCompleta:`${Numeration}/${Name}`
                            }).then(()=> {
                                return res.render('Link', {
                                    Link: Name,
                                    numeration: Numeration,
                                    bar: '/'
                                })
                            })
                        }
                    }
                })
                
        }

        return GerarLinkName()

    }

    else {
        return res.render('index', {
            erro: 'Url ou Nome invalidos'
        })   
    }


});

module.exports = router
