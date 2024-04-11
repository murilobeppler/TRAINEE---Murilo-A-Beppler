function showTabu () {
    var num = document.getElementById('numIN')
    var tabuada = document.getElementById('seltab')

    
    if (num.value.length == 0) {
        window.alert('digite algum número')
    } else {
        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c<=10) {
            var item = document.createElement ('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}