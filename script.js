function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'morning.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
    }
    else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'afternoon.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
    }
    else {
        // BOA NOITE
        img.src = 'night.jpg'
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
    }
}
