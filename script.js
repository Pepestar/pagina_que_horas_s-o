var int = window.setInterval(() => {carregar()},1000);
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hour = new Date
    var ho = hour.toLocaleTimeString()
    var h = hour.getHours()
    msg.innerText = `Agora são ${ho}.`

if(h >= 0  && h < 12 ) {
    // BOM DIA!
    img.src = 'fotomanha.jpeg'
    document.body.style.background = "#e2cd9f"
} else if (h >= 12 && h < 18) {
    //BoA TARDE!
    img.src = 'fototarde.jpeg'
    document.body.style.background = "#6b84ad"
} else {
    //BOA NOITE!
    img.src = 'fotonoite.jpeg'
    document.body.style.background = "#070b0e"
}

}




