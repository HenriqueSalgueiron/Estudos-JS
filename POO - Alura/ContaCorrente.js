import {Cliente} from "./Cliente.js"
export class ContaCorrente {
    static numeroContas = 0   /* Atribuímos uma variável que, sendo alterada em uma das classes, alterará em todos os lugares. 
                              Como se fosse uma ˜raíz˜, atribuída à classe como um todo, e não somente ao objeto criado a partir da classe*/
    agencia
    _saldo = 0
    _cliente
    /*
    "return" é necessário para quando quisermos que o método devolva algum valor após ser executado. (ex: por isso é obrigatório em get)
    "_" indica que o atributo da classe é privado. Ou seja, não deve ser acessado ou alterado por fora da classe (a não ser que sejam 
        utilizados os métodos aqui declarados)
    "#" faz o atributo da classe ser privada. Ou seja, não será possivel acessar ou alterá-lo por fora da classe (a não ser que sejam 
        utilizados os métodos aqui declarados)
    método é uma função definida dentro de uma classe */
    
    set cliente(novaInfo) {                                         // configura para, através do parâmetro "cliente", eu altere _cliente
        if (novaInfo instanceof Cliente) this._cliente = novaInfo   // verifica se a info dada é compatível com nossa classe: "se é instância"
    } 

    get cliente() {                           // configura para, através do parâmetro "cliente", resgatar a informação _cliente
        return this._cliente
    }

    get saldo() {                             // idem
        return this._saldo
    }

    constructor(cliente, agencia) {
        this.cliente = cliente                // utiliza o método set... declarado em cima para que essa informação "cliente" passe pela verificação 
        this.agencia = agencia
        ContaCorrente.numeroContas++
    }

    sacar (valor) {                                     
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }}  

    depositar (valor) {                                     
        if (valor > 0) this._saldo += valor
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)


    }
}