function calcular() {
     var txtv = window.document.querySelector('input#vel')
     var res = window.document.querySelector('div#res')
     var vel = Number(txtv.value)
     res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
     if(vel >60) {
          res.innerHTML += `<p>Você está <strong>MULTADO!</strong> por excesso de velocidade, área permitida ate <strong>60Km/h</strong></p>`
     }
     res.innerHTML +=`<p>Dirija sempre como o cinto de segurança</p>`
}