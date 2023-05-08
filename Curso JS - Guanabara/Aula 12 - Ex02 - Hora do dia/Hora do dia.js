var TextoHorario = document.querySelector('div#horario')
var InfoData = new Date()
var Hora = InfoData.getHours()
TextoHorario.innerHTML = `Agora são ${Hora} horas` 

var corpo = document.querySelector('body')
var saudacao = document.querySelector('div#saudacao')
var imagem = document.querySelector('img#arquivoimagem')

if (Hora > 5 && Hora < 12) {
    document.body.style.background = '#f4cc7c'
    saudacao.innerText = 'Bom dia!'
    imagem.src = 'bomdia.jpg'
} else if (Hora >= 12 && Hora < 18) {
    saudacao.innerText = 'Boa tarde!'
    imagem.src = 'boatarde.jpg'
    document.body.style.background = '#f6773d'

} else {
    document.body.style.background = '#2c6fa3'
    saudacao.innerText = 'Boa noite!'
    imagem.src = 'boanoite.jpg'
}


