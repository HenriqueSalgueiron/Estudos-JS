var verificacao = document.querySelector('input#verificar') 
verificacao.addEventListener('click', verificar)

function verificar() {
    var InputAno = document.querySelector('input#idade')
    var AnoNascimento = InputAno.value
    var idade = 2023 - AnoNascimento

    var data = new Date()
    var ano = data.getFullYear()
    var mensagem = document.querySelector('div#mensagem')
    
    var fsex = document.getElementsByName('radsex')

    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')

    if (AnoNascimento.length == 0 || Number(AnoNascimento) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
    
        if (fsex[0].checked){    
            if (idade <= 10) {
                mensagem.innerHTML = `Detectamos uma criança, sexo Masculino, de ${idade} anos`
                imagem.src = 'crianca-m.jpg'
            } else if (idade <= 18) {
                mensagem.innerHTML = `Detectamos um jovem, sexo Masculino, de ${idade} anos`
                imagem.src = 'jovem-m.jpg' 
            } else if (idade <= 60) {
                mensagem.innerHTML = `Detectamos um adulto, sexo Masculino, de ${idade} anos`
                imagem.src = 'adulto-m.jpg'
            } else {
                mensagem.innerHTML = `Detectamos um idoso, sexo Masculino, de ${idade} anos`
                imagem.src = 'idoso-m.jpg'
            }

        } else {
            if (idade <= 10) {
                mensagem.innerHTML = `Detectamos uma criança, sexo Feminino, de ${idade} anos`
                imagem.src = 'crianca-f.jpg'
            } else if (idade <= 18) {
                mensagem.innerHTML = `Detectamos um jovem, sexo Feminino, de ${idade} anos`
                imagem.src = 'jovem-f.jpg' 
            } else if (idade <= 60) {
                mensagem.innerHTML = `Detectamos um adulto, sexo Feminino, de ${idade} anos`
                imagem.src = 'adulto-f.jpg'
            } else {
                mensagem.innerHTML = `Detectamos um idoso, sexo Feminino, de ${idade} anos`
                imagem.src = 'idoso-f.jpg'
            }
        }
    }

    mensagem.appendChild(imagem)

}

