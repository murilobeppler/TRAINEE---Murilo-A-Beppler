function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'

            if (idade>= 0 && idade<=10) {
                img.setAttribute('src', '')
                img.setAttribute('alt', 'homem crianca')
            }else if (idade <21) {
                img.setAttribute('src', '')
                img.setAttribute('alt', 'homem jovem')
            } else if (idade <51 ){
                img.setAttribute('src', '')
                img.setAttribute('alt', 'homem adulto')
            } else {
                img.setAttribute('src', '')
                img.setAttribute('alt', 'homem idoso')
            }

        } else {
            genero = 'mulher'

            if (idade>= 0 && idade<=10) {
                img.setAttribute('src', '')
                img.setAttribute('alt', 'mulher criança')
            }else if (idade <21) {
                img.setAttribute('src', '')
                img.setAttribute('alt', 'mulher jovem')
            } else if (idade <51 ){
                img.setAttribute('src', '')
                img.setAttribute('alt', 'mulher adulta')
            } else {
                img.setAttribute('src', '')
                img.setAttribute('alt', 'mulher idosa')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}