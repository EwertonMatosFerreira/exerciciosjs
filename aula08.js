function verificar() {
    var idade = window.document.querySelector('input#letras')
    var node = window.document.querySelector('div#node')
    var voto = (idade.value)
    //voto.innerText =`Você tem ${idade} anos`
    if(voto < 16){
        node.innerHTML = `<p>Não Vota</p>`
    }
    else if ( voto <18 || voto >65){
        node.innerHTML = `<p>Voto Opcional</p>`
    }
    else {
        node.innerHTML = `<p>Voto Obrigatório</p>`
    }

}





/*var idade = 17
console.log(`Você tem ${idade} anos.`)
if(idade < 16) {
    console.log('Não Vota')
} else if (idade <18 || idade >65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}*/
