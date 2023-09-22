function verificar() {
     var campo = window.document.querySelector('input#campo_nome')
     var res = window.document.querySelector('div#res')
     var país = (campo.value)
     //res.innerHTML = `<P> Você é estrangeiro</P>`
     if(país != 'Brasil'){
          res.innerHTML = `<P> Você é estrangeiro</P>`

     } else {
          res.innerHTML = `<P> Você é Brasileiro</P>`
     }
}