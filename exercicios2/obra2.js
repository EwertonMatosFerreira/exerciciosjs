function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente' )
    }else{
       var fsex = document.getElementsByName('sex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = window.document.getElementById('fotos')
       if(fsex[0].checked) {
        gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                // Criança
                img.src = 'menino.jpg'
            } else if (idade <21) {
                //jovem
                img.src ='jovemm.jpg'
            } else if (idade < 50 ) {
                //adulto
                img.src= 'homem.jpg'
            }else {
                //idoso
                img.src='idoso'
            }
       } else if (fsex[1].checked){
        gênero = 'Mulher'
        if(idade >=0 && idade < 10) {
            // Criança
            img.src= 'menina.jpg'
        } else if (idade <21) {
            //jovem
            img.src='jovemf.jpg'
        } else if (idade < 50 ) {
            //adulto
            img.src= 'mulher.jpg'
        }else {
            //idoso
            img.src= 'idosa.jpg'
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}