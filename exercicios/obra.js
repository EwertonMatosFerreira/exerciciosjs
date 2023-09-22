function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('tamanho')
var data = new Date()
var hora = data.getHours()
//var hora = 13
msg.innerHTML = `Agora são ${hora}hora.`
if (hora >= 5 && hora < 12) {
    //Bom Dia!
    img.src = 'bom-dia.jpg'
    document.body.style.background = '#e2cd9f'
} else if(hora >= 12 && hora <18) {
    //Boa Tarde!
    img.src = 'boa-tarde.jpg'
    document.body.style.background = '#b9846f'
}else if (hora >=18 && hora <23){
    //Boa Noite!
    img.src = 'boa-noite.jpg'
    document.body.style.background = '#515154'
} else {
    // Boa madrugada
    img.src = 'madrugada.jpg'
    document.body.style.background = '#00000056'
}

}
