const copyBtn = document.querySelector('button')

function copy() {
    const linkCopy = document.getElementById('L').value
    const copy = linkCopy.substring(10, linkCopy.length) 
    console.log(linkCopy)
    console.log(linkCopy.lenght)
    console.log(copy)

    navigator.clipboard.writeText(copy).then(()=>{ console.log('copiado')})
    
}

copyBtn.onclick = copy