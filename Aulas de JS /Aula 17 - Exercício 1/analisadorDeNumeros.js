var botaoAdd = document.querySelector('input#botaoadd')
botaoAdd.addEventListener('click', adicionar)
vetorValores = []

var botaoFin = document.querySelector('input#botaofin')
botaoFin.addEventListener('click', finalizar)

function adicionar (){
    var tabela = document.querySelector('select#tab')
    var numero = document.querySelector('input#txtnumero')
    var item = document.createElement('option')  

    if (numero.value == '') {
    window.alert('Digite um número válido!')
} else {
        item.text = `Valor ${numero.value} adicionado`
        tabela.appendChild(item)
        
        vetorValores.push(numero.value)
    }
}


function finalizar () {
    if (vetorValores.length == 0) {
        window.alert('Adicione valores antes de iniciar!')
    } else { 

        
        var resultados = document.querySelector('div#txtresultados')
        resultados.innerHTML = ``
        // Quantia cadastrada
        var NumElementos = document.createElement('p')                                                     // indica a quantia de números cadastrados
        NumElementos.innerHTML = `Ao todo, temos ${vetorValores.length} números cadastrados`
        resultados.appendChild(NumElementos)
        
        vetorValores.sort()                                                                               // Ordena o array
        
        var maiorValor = document.createElement('p')                                                     // indica o maior número do array
        maiorValor.innerHTML = `O maior valor informado foi ${vetorValores[vetorValores.length - 1]}.`
        resultados.appendChild(maiorValor)
        
        var menorValor = document.createElement('p')                                                     // indica o menor número do array
        menorValor.innerHTML = `O menor valor informado foi ${vetorValores[0]}.`
        resultados.appendChild(menorValor)
        
        var somaValores = document.createElement('p')                                                   //  indica a soma dos valores
        var soma = 0
        for (var i = vetorValores.length; i > 0; i--) {
            soma += Number(vetorValores[i - 1])
        }   
        somaValores.innerHTML = `Somando todos os valores, temos ${soma}.`
        resultados.appendChild(somaValores)
        
        var mediaValores = document.createElement('p')
        mediaValores.innerHTML = `A média dos valores digitados é ${(soma / vetorValores.length).toFixed(1)}`
        resultados.appendChild(mediaValores)
    }
        
} 
    