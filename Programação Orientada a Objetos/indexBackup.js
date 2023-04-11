// -------------------------------------------------- CRIANDO OBJETOS -----------------------------------------

// precisamos armazenar essa informação que estamos trazendo, por isso atribuímos a uma variável
// "cliente 1 é uma Instância da minha classe cliente"
// Neste momento estamos criando objetos. Objeto "cliente1", objeto "cliente2"...

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// const cliente1 = new Cliente()          *Criamos o objeto de info do cliente dentro do objeto de conta
//     cliente1.cpf = '11122233309'            
//     cliente1.nome = 'Ricardo'               

// const cliente2 = new Cliente()          *Criamos o objeto de info do cliente dentro do objeto de conta
//     cliente2.nome = 'Alice'
//     cliente2.cpf = '88822233309'
                                        
const contaCorrenteRicardo = new ContaCorrente ()
    contaCorrenteRicardo.cliente = new Cliente ()
    contaCorrenteRicardo.cliente.nome = 'Ricardo'
    contaCorrenteRicardo.cliente.cpf = 11122233309

    contaCorrenteRicardo.agencia = 1001
    contaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente ()
    conta2.cliente = new Cliente ()
    conta2.cliente.nome = 'Alice'
    conta2.cliente.cpf = 88822233309
    conta2.agencia = 102
 
console.log(contaCorrenteRicardo)
console.log(conta2)



 