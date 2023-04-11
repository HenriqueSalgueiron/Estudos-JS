var botao = document.querySelector('input#botones')
botao.addEventListener('click', tabuada)


function tabuada () {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    
    for (c = 1; c <= 10; c + 1) {
        var item = document.createElement('option')
        var r = n * c
            item.innerHTML = `${n} X ${c} = ${r}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
            
        }
    }
    /* var botao = document.querySelector('input#botao')
    botao.addEventListener('click', gerar)
    
    function gerar () {
        var numero = document.querySelector('input#txtnumero')
        var n = Number(numero.value)
        var tabela = document.querySelector('tabela')
    
        for (c = 1; c <= 10; c++) { 
    
           var r = c * n 
           var item = document.createElement('option')
           item.innerHTML = `${n} X ${c} = ${r}`
           item.value = `valor${c}`
           tabela.appendChild(item)
    
        }
    } */