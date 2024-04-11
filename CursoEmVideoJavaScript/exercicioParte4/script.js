function conta() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Digite um inicio/fim/passo valido')
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p<=0) {
            window.alert('passo invalido... considerando o passo igual a 1')
            p=1
        }

        if (i<f) {
            //contagem progressiva
            for (let c = i; c<= f; c +=p) {
            res.innerHTML += ` ${c} \u{1F449}`
         }
         
        
        } else {
            //contagem regressiva
            for (let c = i; c>=f; c-= p) {
                res.innerHTML += `${c}\u{1F449} `
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }

}