function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hour = data.getHours()
    msg.innerHTML = `agora são ${hour} horas.`

    if (hour >= 0 && hour <12) {
    img.src = 'manha.jpg'
    document.body.style.backgrounf = 'yellow' 
    } else if (hour >= 12 && hour <=18) {
    img.src = 'tarde'
    document.body.style.background = 'orange'
    } else {
    img.src = 'noite'
    document.body.style.background = 'black'
    }

}