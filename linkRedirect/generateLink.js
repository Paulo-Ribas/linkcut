const NewUrl = require('../database/link')
const express = require('express')
const router = express.Router()
let count = 0

router.post('/', (req, res) => {
    const url = req.body.Url
    let existe = false
    if(url === undefined || url === null) {
        return  res.render('index', {
            erro: 'Sua Url Estava Incorreta'
        })

    }
    
    if (url.substring(0, 4) === 'http' || url.substring(0, 5) === 'data:' || url.substring(0, 6) === 'bit.ly/'){
        function GerarLink(LinkSecundario, ...numerosProibidos) {
            const alfb = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
            const ALFB = alfb.map( a => {
                return a.toUpperCase(a)
            })
            
            const result = []
            console.log(numerosProibidos)
        
        
            const possibility = Math.random() * 100 + 101 - 100
            if (parseInt(possibility) >= 50) {
                result.push(alfb[parseInt(Math.random() * alfb.length + alfb.length - alfb.length)])
                result.push(ALFB[parseInt(Math.random() * ALFB.length + ALFB.length - ALFB.length)])
                
            }
            else {
                result.push(ALFB[parseInt(Math.random() * ALFB.length + ALFB.length - ALFB.length)])
                result.push(alfb[parseInt(Math.random() * alfb.length + alfb.length - alfb.length)])
            }
    
            let NewLink = `${result[0]}${result[1]}${parseInt(possibility)}`
    
            if (possibility <= 50) {
                NewLink = `${parseInt(possibility)}${result[0]}${result[1]}`
            }
            
            if (LinkSecundario) {
                NewLink = LinkSecundario
            }
            NewUrl.findOne({where:{fullLink: url}}).then(found => { 
                if (found) {
                    console.log('foi até aqui?', 0)
                    existe = true
                    console.log(existe)
                    return res.render('Link', {
                        Link: found.cutLink,
                        numeration: null,
                        bar: null
                    })
                } 
                else {
                    console.log('foi até aqui?', 1)
                    if (existe === false) { 
                        console.log('foi até aqui?', 2)
                        NewUrl.findOne({where:{cutlink: NewLink}}).then(found => {
                            if(found) {
                                count = count + 1
                                console.log(count)
                                if(count <= 33) {
                                    console.log('primeiro check')
                                    return GerarLink(null, NewLink)
                                }
                                if (count > 33 && count <= 43) {
                                    console.log(33)
                                    function alfabeto2(NewLink2, ...numerosProibidos) {
                                        const alfb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
                                        const ALFB = alfb.map(a => {
                                            return a.toUpperCase(a)
                                        })
                                        let possibility = parseInt(Math.random() * (10 - 10) + 10)
                                        const alfabetoLendario = []
                                        function alfabetoLendarioCRIADOR() {
                                            for (let i = 0; i < alfb.length; i++) {
                                                let newPalavra = alfb[i]
                                                for (let y = 0; y < ALFB.length; y++) {
                                                    let NEWPALAVRA = ALFB[y]

                                                    alfabetoLendario.push(`${newPalavra}${NEWPALAVRA}`)
                                                }


                                            }
                                        }
                                        alfabetoLendarioCRIADOR()
                                        const ALFABETOLENDARIO = alfabetoLendario.map(a => {
                                            return a.toUpperCase(a)
                                        })
                                        console.log(alfabetoLendario)

                                        const alfabetoFinal = []

                                        function alfabetoFinalCRIADOR() {
                                            for (let i = 0; i < alfabetoLendario.length; i++) {
                                                let newPalavra = alfabetoLendario[i];
                                                
                                                for (let y = 0; y < alfabetoLendario.length; y++) {
                                                    if (possibility <= 5) {
                                                        let NewPalavra = alfabetoLendario[y];
                                                        alfabetoFinal.push(`${NewPalavra}${newPalavra}`)
                                                    }
                                                    else {
                                                        let NewPalavra = ALFABETOLENDARIO[y];
                                                        alfabetoFinal.push(`${newPalavra}${NewPalavra}`)
                                                    }

                                                }

                                            }

                                        }
                                        alfabetoFinalCRIADOR()
                                        console.log(alfabetoFinal)
                                        const result = []

                                         result.push(alfabetoFinal[parseInt(Math.random() * alfabetoFinal.length + alfabetoFinal.length - alfabetoFinal.length)])
            
            
                                        NewLink2 = `${result[0]}`
            
                                        return GerarLink(NewLink2, ...numerosProibidos)
            
            
                                    }
                                    return alfabeto2()
                                    
                                }
                                if (count > 43 && count < 50) {
                                    function alfabeto3() {
                                        console.log('testando o problema ', 1)
                                        const alfb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
                                        console.log('testando o problema ', 1222222)
                                        const ALFB = alfb.map(a => {
                                            return a.toUpperCase(a)
                                        })
                                        console.log('testando o problema ', 331)
                                        let possibility = parseInt(Math.random() * (10 - 10) + 10)
                                        const alfabetoLendario = []
                                        const result = []
                                        console.log('testando o problema ', 22)
                                        function alfabetoLendarioCRIADOR() {
                                            for (let i = 0; i < alfb.length; i++) {
                                                    let newPalavra = alfb[i]
                                            
                                                for (let y = 0; y < alfb.length; y++) {
                                                    if (possibility <= 5) {
                                                        let NEWPALAVRA = ALFB[y]
                                                        
                                                        alfabetoLendario.push(`${newPalavra}${NEWPALAVRA}`)
                                                    }
                                                    else {
                                                        let NEWPALAVRA = alfb[y]
                                                        alfabetoLendario.push(`${NEWPALAVRA}${newPalavra}`)
                                                    }

                                                }


                                            }
                                        }
                                        alfabetoLendarioCRIADOR()
                                        console.log('testando o problema ', 3)
                                        const ALFABETOLENDARIO = alfabetoLendario.map(a => {
                                            return a.toUpperCase(a)
                                        })

                                        const alfabetoFinal = []
                                        console.log('testando o problema ', 4)
                                        function alfabetoFinalCRIADOR() {
                                            for (let i = 0; i < alfabetoLendario.length; i++) {
                                                let newPalavra = alfabetoLendario[i];
                                                for (let y = 0; y < alfabetoLendario.length; y++) {
                                                    if (possibility <= 5) {  
                                                        let NewPalavra = alfabetoLendario[y];
                                                            let roleta = parseInt(Math.random() * 1 + 2 - 1)
                                                            if (roleta = 1) {
                                                                console.log('aqui é a roleta', roleta)
                                                                NewPalavra = alfabetoLendario[y]  
                                                            }
                                                            else {
                                                                NewPalavra = ALFABETOLENDARIO[y]
                                                            }
                                                            
                                                        alfabetoFinal.push(`${NewPalavra}${newPalavra}`)
                                                    }
                                                    else {
                                                        let NewPalavra = ALFABETOLENDARIO[y]
                                                        let roleta = parseInt(Math.random() * 1 + 2 - 2)
                                                        if (roleta === 1) {  
                                                            alfabetoFinal.push(`${NewPalavra}${newPalavra}`)
                                                            console.log('e aqui chegou a roleta 2', roleta)
                                                        }
                                                        else {
                                                            alfabetoFinal.push(`${newPalavra}${NewPalavra}`)
                                                        }

                                                    }
                                                }

                                            }

                                        }
                                        alfabetoFinalCRIADOR()

                                        console.log(alfabetoFinal)

                                        const alfabetoDeus = []

                                        function ALfabetoDiosCriador() {
                                            for (let i = 0; i < alfabetoFinal.length; i++) {
                                                let newPalavra = alfabetoFinal[i]

                                                for (let y = 0; y < ALFB.length; y++) {
                                                    if (possibility <= 5) {     
                                                        let NewPalavra = ALFB[y];
                                                        let roleta = parseInt(Math.random() * 1 + 2 - 1)
                                                        if (roleta === 1) {
                                                            alfabetoDeus.push(`${newPalavra}${NewPalavra}`)
                                                        }
                                                        else {
                                                            alfabetoDeus.push(`${NewPalavra}${newPalavra}`)
                                                        }
                                                    }
                                                    else {
                                                        let NewPalavra = alfb[y];
                                                        alfabetoDeus.push(`${newPalavra}${NewPalavra}`)
                                                        let roleta = parseInt(Math.random() * 1 + 2 - 1)
                                                        if (roleta === 1) {
                                                            alfabetoDeus.push(`${newPalavra}${NewPalavra}`)
                                                        }
                                                        else {
                                                            alfabetoDeus.push(`${NewPalavra}${newPalavra}`)
                                                        }
                                                    }
                                                }

                                            }

                                        }
                                        ALfabetoDiosCriador()

                                        console.log(alfabetoDeus.length)

                                        result.push(alfabetoDeus[parseInt(Math.random() * alfabetoDeus.length + alfabetoDeus.length - alfabetoDeus.length)])

                                        let NewLink2 = `${result[0]}`

                                        return GerarLink(NewLink2)
                                    }

                                     return alfabeto3()
                                    
                                }
                                if (count >= 50) { 
                                    return res.render('index', {
                                        erro: 'não foram encontradas combinações para o novo link, problema será resolvido dentro de poucos dias'
                                    })
                                } 
                                
                            }
                            else {
                                if (existe === false) {
                                    console.log('foi até aqui?', 4)
                                    NewUrl.create({
                                        cutLink: NewLink,
                                        fullLink: url,
                                    }).then(() => {
                                        return res.render('Link', {
                                            Link: NewLink,
                                            numeration: null,
                                            bar: null
                                        })
                                    })
                                }
                                
                            }
                        })
                        }
                }
            })
            }
        return GerarLink()
    }

    else {
        return res.render('index', {
            erro: 'Sua Url Estava Incorreta'
        })

    }
})

module.exports = router