var num = document.getElementById('numIN')
var lista = document.getElementById('lista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if (Number(n)>= 1 && Number(n) <= 100){
    return true
    }else {
        return false
    }   
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `  Valor ${num.value} adicionado  `
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('valor inválido ou já encontrado na lista, digite outro valor')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.lenght == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let numele = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let i in valores) {
            soma += valores[i]
            if (valores[i] > maior) {
                maior = valores[i]
            }
            if (valores[i] < menor) {
                menor = valores[i]
            }
        }
        media = soma/numele

        res.innerHTML = ''
        res.innerHTML += `O total de elementos adicionados é de ${numele}<br><br>`
        res.innerHTML += `O maior número adicionado é ${maior}<br><br>`
        res.innerHTML += `O menor número adicionado é ${menor} <br><br>`
        res.innerHTML += `A soma total dos números adicionados é ${soma} <br><br>`
        res.innerHTML += `A média dos números adicionados é ${media}`

    }
}

