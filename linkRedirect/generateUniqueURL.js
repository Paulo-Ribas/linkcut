const NewUrl = require('../database/link')
const express = require('express')
const router = express.Router()
let count = 0

router.post('/', (req, res) => {
    const url = req.body.Url
    let existe = false
    if (url === undefined || url === null) {
        return res.render('urlAd', {
            erro: 'Sua Url Estava Incorreta'
        })

    }

    if (url.substring(0, 4) === 'http' || url.substring(0, 5) === 'data:' || url.substring(0, 6) === 'bit.ly/') {
        function GerarLink(LinkSecundario, ...numerosProibidos) {
            const alfb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
            const ALFB = alfb.map(a => {
                return a.toUpperCase(a)
            })
            const alfbMin = ['VW', 'WX', 33]
            let NewLink = `${alfb[parseInt(Math.random() * alfb.length + alfb.length - alfb.length)]}${ALFB[parseInt(Math.random() * ALFB.length + ALFB.length - ALFB.length)]}`
            NewLink = 'fg'
            if (LinkSecundario) {
                NewLink = LinkSecundario
            }

            NewUrl.findOne({where:{cutLink: NewLink}}).then(found =>{
                if (found) {
                    count = count + 1
                    if (count < 5) {
                        return GerarLink()
                    }
                    if(count => 5 && count <= 13) {
                        const alfabetoLendario = []
                        function alfabetoLendarioCRIADOR() {
                            for (let i = 0; i < alfb.length; i++) {
                                let newPalavra = alfb[i]
                                for (let y = 0; y < alfb.length; y++) {
                                    let NEWPALAVRA = ALFB[y]

                                    alfabetoLendario.push(`${newPalavra}${NEWPALAVRA}`)
                                }


                            }
                        }
                        alfabetoLendarioCRIADOR()
                        console.log(alfabetoLendario)
                        const ALFABETOLENDARIO = alfabetoLendario.map(a => {
                            return a.toUpperCase(a)
                        })

                        const alfabetoFinal = []

                        function alfabetoFinalCRIADOR() {
                            for (let i = 0; i < alfabetoLendario.length; i++) {
                                let newPalavra = alfabetoLendario[i];

                                for (let y = 0; y < alfabetoLendario.length; y++) {
                                    let NewPalavra = alfabetoLendario[y + 1];
                                    if (alfabetoLendario[y + 1] == undefined) {
                                        NewPalavra = alfbMin[parseInt(Math.random() * alfbMin.length + alfbMin.length - alfbMin.length)]
                                    }

                                    alfabetoFinal.push(`${NewPalavra}${newPalavra}`)
                                }

                            }

                        }
                        alfabetoFinalCRIADOR()
                        console.log(alfabetoFinal)
                        const result = []
                        result.push(alfabetoFinal[parseInt(Math.random() * alfabetoFinal.length + alfabetoFinal.length - alfabetoFinal.length)])
                        let LinkSecundario = `${result[0]}`
                        return GerarLink(LinkSecundario)

                    }
                    if (count > 13 && count <= 23 ) {
                        const alfabetoLendario = []
                        function alfabetoLendarioCRIADOR() {
                            for (let i = 0; i < alfb.length; i++) {
                                let newPalavra = alfb[i]
                                for (let y = 0; y < alfb.length; y++) {
                                    let NEWPALAVRA = ALFB[y]

                                    alfabetoLendario.push(`${newPalavra}${NEWPALAVRA}`)
                                }


                            }
                        }
                        alfabetoLendarioCRIADOR()
                        console.log(alfabetoLendario)
                        const ALFABETOLENDARIO = alfabetoLendario.map(a => {
                            return a.toUpperCase(a)
                        })

                        const alfabetoFinal = []

                        function alfabetoFinalCRIADOR() {
                            for (let i = 0; i < alfabetoLendario.length; i++) {
                                let newPalavra = alfabetoLendario[i];

                                for (let y = 0; y < alfabetoLendario.length; y++) {
                                    let NewPalavra = alfabetoLendario[y + 1];
                                    if (alfabetoLendario[y + 1] == undefined) {
                                        NewPalavra = alfbMin[parseInt(Math.random() * alfbMin.length + alfbMin.length - alfbMin.length)]
                                    }

                                    alfabetoFinal.push(`${NewPalavra}${newPalavra}`)
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
                                    const NewPalavra = ALFB[y];

                                    alfabetoDeus.push(`${newPalavra}${NewPalavra}`)
                                }

                            }

                        }
                        ALfabetoDiosCriador()
                        console.log(alfabetoDeus)
                        const result = []
                        result.push(alfabetoDeus[parseInt(Math.random() * alfabetoDeus.length + alfabetoDeus.length - alfabetoDeus.length)])
                        let LinkSecundario = `${result[0]}`
                        return GerarLink(LinkSecundario)

                        
                    }

                    if (count > 23 && count >= 33) {
                        const alfb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
                        const ALFB = alfb.map(a => {
                            return a.toUpperCase(a)
                        })
                        const alfabetoLendario = []
                        function alfabetoLendarioCRIADOR() {
                            for (let i = 0; i < alfb.length; i++) {
                                let newPalavra = alfb[i]
                                for (let y = 0; y < alfb.length; y++) {
                                    let NEWPALAVRA = ALFB[y]

                                    alfabetoLendario.push(`${newPalavra}${NEWPALAVRA}`)
                                }


                            }
                        }
                        alfabetoLendarioCRIADOR()
                        console.log(alfabetoLendario)
                        const ALFABETOLENDARIO = alfabetoLendario.map(a => {
                            return a.toUpperCase(a)
                        })

                        const alfabetoFinal = []

                        function alfabetoFinalCRIADOR() {
                            for (let i = 0; i < alfabetoLendario.length; i++) {
                                let newPalavra = alfabetoLendario[i];

                                for (let y = 0; y < alfabetoLendario.length; y++) {
                                    let NewPalavra = alfabetoLendario[y + 1];
                                    if (alfabetoLendario[y + 1] == undefined) {
                                        NewPalavra = alfbMin[parseInt(Math.random() * alfbMin.length + alfbMin.length - alfbMin.length)]
                                    }

                                    alfabetoFinal.push(`${NewPalavra}${newPalavra}`)
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
                                    const NewPalavra = ALFB[y];

                                    alfabetoDeus.push(`${newPalavra}${NewPalavra}`)
                                }

                            }

                        }
                        ALfabetoDiosCriador()
                        console.log(alfabetoDeus)

                        const alfabetoTamanhoDoBrazil = []
                        function AlfabetoTamanhoDoBrazilCRIADOR() {
                            for (let i = 0; i < alfabetoDeus.length; i++) {
                                const newPalavra = alfabetoDeus[i];
                                for (let y = 0; y < alfbMin.length; y++) {
                                    const NewPalavra = alfbMin[y];

                                    alfabetoTamanhoDoBrazil.push(`${newPalavra}${NewPalavra}`)

                                }

                            }

                        }

                        AlfabetoTamanhoDoBrazilCRIADOR()

                        console.log(alfabetoTamanhoDoBrazil)
                        const result = []
                        result.push(alfabetoTamanhoDoBrazil[parseInt(Math.random() * alfabetoTamanhoDoBrazil.length + alfabetoTamanhoDoBrazil.length - alfabetoTamanhoDoBrazil.length)])
                        let LinkSecundario = `${result[0]}`
                        return GerarLink(LinkSecundario)
                    }
                    if (count > 33) {
                        return res.render('index', {
                            erro: 'não foram encontradas combinações para o novo link, problema será resolvido dentro de poucos dias'
                        })
                    }
                }
                else {
                     NewUrl.create({
                        cutLink: NewLink,
                        fullLink: url
                    }).then(()=>{
                        return res.render('Link', {
                            Link: NewLink,
                            numeration: null,
                            bar: null
                        })
                    })
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