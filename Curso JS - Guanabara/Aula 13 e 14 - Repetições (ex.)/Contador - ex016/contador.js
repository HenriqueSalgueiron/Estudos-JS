
var contar = document.querySelector('input#contar')
contar.addEventListener('click', contagem)

function contagem () { 
  var inicio = document.querySelector('input#txtinicio')
  var fim = document.querySelector('input#txtfim')
  var passo = document.querySelector('input#txtpasso')
  var resultado = document.querySelector('div#contagem')
  resultado.innerHTML = 'Contando: '

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || Number(passo.value) <= 0 ) {
      window.alert('[ERRO] Verifique os valores.')
  } else { 

    var i = Number(inicio.value)
    var f = Number(fim.value) 
    var p = Number(passo.value)

    if (i <= f) {

      for (c = i; c <= f; c += p) {
        resultado.innerHTML += `${c} ` // "Contando: "-> "Contando: oi" -> "Contando: oioi" ... 

        switch (c + p <= f) {
          case true: 
            resultado.innerHTML += `\u{27A1}` // seta
            break
          case false:    
            resultado.innerHTML += `\u{1F6D1}` // stop
            break
          } 

      }

    } else {

      for (c = i; c >= f; c -= p) {
        resultado.innerHTML += `${c} ` // "Contando: "-> "Contando: oi" -> "Contando: oioi" ... 

        switch (c - p >= f) {
          case true: 
            resultado.innerHTML += `\u{27A1}` 
            break
          case false:    
            resultado.innerHTML += `\u{1F6D1}` 
            break
        } 

      }
    }    
  }
}


