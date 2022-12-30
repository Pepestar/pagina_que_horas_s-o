function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() + '0:0' + data.getMinutes()
    
    const relogio = setInterval(carregar,1)

     msg.innerHTML = `Agora são: ${hora} horas.`


if(hora >= 0 && hora < 12 ) {
    // BOM DIA!
    img.src = 'fotomanha.jpeg'
    document.body.style.background = "#e2cd9f"
} else if (hora >= 12 && hora <= 18) {
    //BoA TARDE!
    img.src = 'fototarde.jpeg'
    document.body.style.background = "#6b84ad"
} else {
    //BOA NOITE!
    img.src = 'fotonoite.jpeg'
    document.body.style.background = "#070b0e"
}

}