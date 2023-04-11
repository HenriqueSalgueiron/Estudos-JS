export class Cliente {                  // Dentro de uma classe não há "variáveis". Há campos ou atributos.
    nome                                // Classe é um molde
    _cpf           
    
    get cpf() {                        // Esse Get vai impedir que seja feito um cliente.cpf = ... 
        return this._cpf
    }

    constructor (nome, cpf) {          // O constructor permite que, no momento da criação da classe, sejam passados os atributos nome e cpf
        this.nome = nome               // Essa combinação servirá para tornar a informação imutável
        this._cpf = cpf
    }
}