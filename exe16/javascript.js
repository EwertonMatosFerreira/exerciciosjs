function contar(){
    let inicio = window.document.querySelector('input#nu')
    let fim = window.document.querySelector('input#nu1')
    let passo = window.document.querySelector('input#nu2')
    let res = window.document.querySelector('div#res')

    if (inicio.value.length ==0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`

    } else {
    res.innerHTML = ` Contando: <br>`
    let i = Number(inicio.value)
    let f  = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
        window.alert(`passo invalido! Considerando PASSO1`)
        p = 1
    }
    if (i < f){
        //contagem crescente
        for(let c = i; c <= f; c+=p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
           
    } else {
        // contagem regressiva
        for( let c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}