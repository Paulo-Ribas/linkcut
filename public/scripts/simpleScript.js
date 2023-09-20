 const arrow = document.querySelector('i')
 const Form1 = document.getElementById('form-1').classList
 const Form2 = document.getElementById('form-2').classList
 const apelido = document.getElementById('apelido')
 let count = 0

 

function pressed() {
    if (count > 1) {
        count = 0
        
    }
    if(count === 0) {
        // nao faço ideia do porque o toggle nao faz isso funcionar direito lol
        Form1.add('center-left')
        Form1.remove('left-center')
        Form2.add('left-center')
        Form2.remove('center-left')
        setTimeout(() => {
            Form1.add('hidden')
            Form2.remove('hidden')
            arrow.setAttribute('title', 'gerar URL aleatória')
        }, 500);
        
    }
    else {
        Form1.add('left-center')
        Form1.remove('center-left')
        Form2.add('center-left')
        Form2.remove('left-center')
        setTimeout(() => {
            Form2.add('hidden')
            Form1.remove('hidden')
            arrow.setAttribute('title', 'gerar Link com nome')
        }, 500);
        
    }
    count++
    
}

apelido.addEventListener('input', (e)=> {
    if(e = ' ') {
        apelido.value = apelido.value.replace(/ /g, '-')
    }
    
    apelido.value = apelido.value.replace(/--/g, '-')
    apelido.value = apelido.value.replace(/__/g, '_')
    
    apelido.value = apelido.value.replace(/[^a-zA-Z0-9_-]/g, "")// comprar o curso para aprender de verdade isso
    
    

    
})



arrow.onclick = pressed


console.log(window.navigator)
console.log(window.length)