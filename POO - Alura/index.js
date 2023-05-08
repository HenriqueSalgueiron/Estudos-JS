/*precisamos armazenar o endereçamento da informação que estamos trazendo, por isso atribuímos a uma variável:
"cliente 1 é uma Instância da minha classe cliente"
Neste momento estamos criando objetos. Objeto "cliente1", objeto "cliente2"... / Instãncia "cliente1", "cliente2" */

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

/* 
const cliente1 = new Cliente()        // obs: Criar-se-á o objeto de info do cliente dentro do objeto de conta
cliente1.cpf = '11122233309'          // código está comentado pois será feita um versão mais enxuta
cliente1.nome = 'Ricardo'               

const contaCorrenteRicardo = new ContaCorrente ()
contaCorrenteRicardo.cliente = new Cliente ()
contaCorrenteRicardo.cliente.nome = 'Ricardo'
contaCorrenteRicardo.cliente.cpf = 11122233309
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.depositar(500)  */    

const cliente1 = new Cliente ('Ricardo', 11100022291)

const conta1 = new ContaCorrente (cliente1, 101)
conta1.depositar(150)

const cliente2 = new Cliente('Alice', 23282859501)          
                                        
const conta2 = new ContaCorrente (cliente2, 102)
conta2.depositar(200)

console.log(ContaCorrente.numeroContas)

// console.log('ANTES DA TRANSFERÊNCIA:')
// console.log(conta1)
// console.log(conta2)

// console.log('DEPOIS DA TRANSFERÊNCIA:')
// conta1.transferir(50, conta2)
// console.log(conta1)
// console.log(conta2)




 