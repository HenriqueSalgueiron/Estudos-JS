# PRIMEIRO HTML

escrever "html" e selecionar "html:5" para obter um esqueleto. Consultar detalhes no "Aula 4_Primeiro HTML.html"

alguns comandos:

window.alert('Minha primeira mensagem!') // Pop up com uma mensagem de alerta
window.confirm('Está gostando de estudar?') // Janela com OK ou Cancelar
window.prompt('Qual o seu nome?') // Campo aberto que recebe uma mensagem

# VARIÁVEIS E TIPOS PRIMITIVOS (DECLARAR)

Nome da variável = "Identificadores"

1. Podem começar com letra, $ ou _
2. Não pode começar com número
3. É possível usar letras ou números
4. É possível usar acentos e símbolos
5. Não pode conter espaço
6. Não podem ser palavras reservadas (palavras que o JS utiliza)

Dicas para declarar variáveis:

1. Maiúsculas e minúsculas fazem diferença
2. Tente escolher nomes coerentes para as variáveis

# OPERADORES

`Operadores Aritméticos: `

    5 + 2 = 7
    5 - 2 = 3
    5 * 2 = 10
    5 / 2 = 2.5
    5 % 2 = 1
    5 ** 2 = 25

    X   2    ==   x = x + 2
    X -= 2    ==   x = x - 2
    X *= 2    ==   x = x * 2
    X /= 2    ==   x = x / 2
    X %= 2    ==   x = x % 2
    X **= 2    ==   x = x ** 2

    X++ == X+1
    X-- == X-1

    In depths...

    function plusPlus (orig_x) {
    	var orig_x_coerced = Number(orig_x);
    	x = orig_x_coerced + 1;
    	return orig_x_coerced;
    }
    var x = "5";
    plusPlus(x); // 5
    x; // 6

    coersion! na primeira o número vira string. na segunda a string vira número.

`Relacionais: `

    > maior que
    < menor que
    >= maior ou igual
    <= menor ou igual
    == igual
    != diferente

     obs: resultados boleanos (true ou false)

`Identidade: `

    5 == 5     -> true
    5 == '5'   -> true / A Igualdade dupla realiza a coerção do tipo do valor, permitindo se tornarem iguais.
    5 === '5'  -> false / A igualdade tripla não realiza coerção do valor.

`Lógicos:	`

    ! negação
    && conjunção (e)
    || disjunção (ou)

`Ternário: `

    (teste)?(se true):(se false)

    exemplo: média >= 7.0 ? "Aprovado" : "Reprovado"
    traduzindo: se a média for maior ou igual a 7, aparecerá aprovado. senão, aparecerá reprovado

# DOM (Document object Model)

`Definição: `

    Conjunto de objetos dentro do navegador que darão acesso aos componentes do website.
    O DOM não está dentro do Node.js, está no navegador. Por isso fazemos um "site".

`Árvore DOM: `

    Árvore DOM do site vai da raíz (chamada de "window". Tudo dentro do JS está em um objeto chamado window. Window é um objeto DOM. Que é a janela do navegador)

    Dentro do Window existem outros objetos, sendo exemplos:
    	Location: Diz a localização do site (URL)
    	Document: Documento atual
    	History: Guarda de onde você veio, para onde você vai
    Dentro do Document existe outro objeto, chamado html (parte html do site)
    Dentro do html temos 2 objetos (child): head e body / nessa relação, html é um parent (pai) de body e head
    Seguindo no exemplo do arquivo Aula 9.html, dentro de head temos meta e title.
    Já dentro do body, temos h1, 2 parágrafos e uma div.
    Dentro de um dos parágrafos, temos um strong

`Navegando pela árvore DOM: `

5 exemplos de método de seleção de elementos:

Por Marca: Em window: Em document: getElementsByTagName()[]
Por ID: Em window: Em document: getElementById()
Por Nome: Em window: Em document: getElementsByName()[]
Por Classe: Em window: Em document: getElementsByClassName()[]
Por Seletor: O mais recomendável! (querySelector() ou querySelectorAll())
Em window: Em document:
querySelector('div#IdDaDiv'), para ID
querySelector('div.IdDaClasse'), para Classe

Sabendo como navegar pelos elementos, podemos declarar variáveis de acesso aos elementos e, através de scripts, utilizar ou modificar os elementos.
Exemplo:

1. Atribuir um ID à div com: <div id="IdDoElemento"> <div/>
2. Declarar variavel para acesso: var divisao = window.document.getElementById('IdDoElemento')
3. Fazer mudança ou resgate:
   divisao.style.background = 'black' >>
   window.alert(divisao.innerText) >>
   divisao.innerText = 'Texto para o qual desejo alterar ou atribuir'

Exemplo 2, utilizando o método de navegação por Seletor:

1. Atribuir um ID ou classe à div com: <div id="IdDaDiv"> ou <div class="ClasseDaDiv">
2. Declarar uma variavel para acesso:
   var abc = window.document.querySelector('div#IdDaDiv'), quando navegando por ID
   var abc = window.document.querySelector('div.ClasseDaDiv'), quando navegando por classe.
3. Fazer mudança ou resgate: abc.style.background = 'black' / window.alert(abc.innerText) / abc.innerText = 'Texto para o qual desejo alterar ou atribuir'

# EVENTOS DOM

Eventos podem ser configurados no html ou diretamente no js

html:
<div id="x" evento1="func1()" evento2="func2()" evento3="func3()"> alguma texto <div/>

js:
var a = document.querySelector('div#x')
a.addEventListener('event1', func1()) // Está adicionando o event1 na div x, o qual disparará a func1
A.addEventListener('event2', func2()) // Está adicionando o evento2 na div x, o qual disparará a func2

após configurado o evento, configurar a função:
function func1() {
var b = querySelector('div#x')
b.style.background = 'red'  
 }

# CONDICIONAIS

`Condicao simples: `

if () {
true
}

`Condição comum: `

if () {
true
} else {
false
}

`Consição else if: `

if() {
true
} else if{
true
} else {
false
}

`Switch: `

switch (expressão) {
case valor1:
break

    case valor2:

    break

    default:

    break

}

# CONECTANDO AO MEU HTML ARQUIVOS A PARTE DE CSS E JS:

CSS: Dentro da Head, escrever "link:css" e, em "href", adicionar o nome do arquivo de CSS.
JS: Dentro do Body, escrever "script:src" e, em "src", adicionar o nome do arquivo de JS.
Obs.: Os arquivos que serão utilizados deverão estar na mesma pasta que o arquivo HTML.

`Criar objeto de imagem: `

<img... >; "src" será o nome do arquivo que será exibido

`Novo imput: radio `

Utilizado para criar uma bolinha de seleçã0 (ex. em "Idade e gênero")
Para criar multipla escolha, nomear os rads com o mesmo nome.
Posteriormante, no JS, quando for atribuir o objeto a uma variável, utilizar o GetElementsByName('').
No momento de criar uma condição, caso seja criada, utilizar esta estrutura:

if (rad[0].checked) { // "rad" = identificador da variável

}

`Criação de um Elemento via JS (ao invés de ir no HTML e inserir): `

var algumnome = document.createElement('tipo de obj') // Neste momento, estamos criando um objeto e atribuindo-o à variável "algumnome"

`Inserindo o objeto criado em determinado "local" do HTML: `

outronome.appendChild(algumnome) // "outronome" é onde vamos inserir o objeto criado "algumnome". normalmente uma div.

# LAÇOS

`While `

Estrutura de repetição com teste lógico no início:

while (condição) { // primeiro testa a condição, depois executa.
ação
}

Estrutura de repetição com teste lógico no final:

do { // primeira executa a ação, depois testa a condição.
ação
} while (condição)

`For `

for (início; teste; incremento) { // parte da afirmação feita em "início", testando "teste"
ação // realiza a ação
} // feita a ação, realiza o incremento

For simplificado:

    for (var pos in identificador) {               // "Para cada posição no array, imprima": Imprime de um em um
    	console.log(identificador[pos])
    }

    Equivalente a: for (pos = 0; pos < identificador.length; pos++) {
    	console.log(identificador[pos])
    }

`Adicionar Emoji `

site: https://unicode.org/emoji/charts/full-emoji-list.html
estrutura: \u{código numérico} obs: vai vir U+código, só adaptar

# VARIÁVEIS COMPOSTAS

`Array `

var identificador = [elemento1, elemento2, elemento3...] -> Índice 0 -> 1 -> 2

`Métodos `

identificador.`sort()`: ordenar elementos por valor
identificador.`push(x)`: insere o elemento x no array
identificador[y] = x: insere o elemento x na posição y
identificador.`indexOf(x)`: retorna a posição em que o elemento x se encontra no vetor
identificador.`push()`: remove o elemento do fim do array
identificador.`shift()`: remove o elemento do começo do array
identificador.`splice`(início, removecount, novoItem, novoItem...): editar e criar novos arrays:
primeiro parâmetro/argumento: índice a partir do qual iniciará o fatiamento/remoção de elementos
segundo parãmetro/argumento: número de elementos que serão removidos
obs: caso não informado o removeCount, serão removidos todos os elementos a partir do índice indicado.
terceiro parâmetro/argumento em diante: novos itens que serão adicionados
ex:
let meses = ["Janeiro", "Fevereiro", "Segunda", "Terça"];
meses.splice(2, 0, "Março");
console.log(meses);
// ["Janeiro", "Fevereiro", "Março", "Segunda", "Terça"]

# GERENCIAMENTO DE MEMÓRIA, SET E GET.

1.Tipos primitivos sempre são passados como um valor (cópia)
string, number, boolean, null, undefined, symbol
variáveis declaradas armazenam o VALOR informado.

2.Tipos não-primitivos são passados como uma referência
array, object... etc
variáveis declaradas armazenam o ENDEREÇO fornecido.

Assessores SET e GET

Set:
Usando assessores do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado
sem precisar alterar isso em diversos pontos do código.
Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está
sempre segura.

Get:
Utilizado para definir como obter informação do objeto


# ARROW FUNCTIONS

Sintaxe:

	const funcSoma = (a, b) => {
		return a + b;
	}

	ou

	const funcSoma = (a,b) => a + b;

Sendo:

funcSoma: nome da função
(a, b): parâmetros que a função recebe
{ ... }: operação que será executada
obs: pode retirar o colchete e return pois a funçAo tem apenas uma declaraçao (statement)

ex:

	let roupas = [
		{ produto: 'camisa', preço: 25. cor: 'amarela'},
		{ produto: 'calça', preço: 80, cor: 'azul'},
		{ produto: 'jaqueta', preço: 100, cor: 'preto'},
		{ produto: 'camiseta', preço: 15, cor: 'rosa' },
		{ produto: 'calção', preço: 20, cor: 'azul' },
		];

		let precoMaiorQue50 = roupas.filter( (roupa) => roupa.preço > 50)
		console.log(precoMaiorQue50)

	// [ { produto: 'calça', preço: 80, cor: 'azul'},
			 { produto: 'jaqueta', preço: 100, cor: 'preto'} ]

# ASYNC E AWAIT

    Funções assíncronas funcionam como Promises, porém com sintaxe mais simples.
    Necessário declarar a função com a palavra async.
    Quando necessário aguardar por algo (retorno), utiliza-se await (a função pela
     qual se aguarda retorno deve ser uma Promise).
    Pode-se aplicar este recurso em funções anônimas e métodos de classe.
    Tentar usar o await sem o async gera um erro.

    ex:

    	function primeiraFuncao() {
    		return new Promise ((resolve, reject) => {
    			console.log('esperando...');
    			setTimeout(() => {
    				resolve();
    			}, 2000)
    		});
    	};

    	async function segundaFuncao() {
    		console.log('iniciou');
    		await primeiraFuncao();
    		console.log('finalizou');
    	};
    	segundaFuncao()

    Apenas retornará "finalizou" após 2s, pois primeiro é aguardado o retorno da Pro-
    mise em primeiraFuncao().

    TRY E CATCH

    Para validar a função assíncrona utiliza-se o bloco try {} catch {}.
    Em try testamos e em catch declaramos o que ser feito caso seja
    lançada uma exceção no bloco try.
    Também pode ser utilizada uma cláusula finally {}, a qual é executada
    após a execução do bloco try e da(s) cláusula(s) catch, porém antes
    das declarações seguintes ao try. Ela sempre é executada.

# PROMISES

    Como o nome diz, aguarda um retorno. ex: aguarda uma resposta do servidor e, dependendo da resposta,
    vai retornar uma mensagem de erro ou sucesso.

    Para criar uma Promise, devemos:
    	- Instanciar a classe Promise.
    	- Atribuir 2 argumentos à Promise: resolve e reject.
    	- Caso queira desencadear outros processos utilizamos .then e .catch

    ex:

    	const myPromise = new Promise ( (resolve, reject) => {
    		const name = 'Henrique';

    		if(name === 'Henrique') {
    			resolve('Usuário Henrique encontrado!')
    		} else {
    			reject('O usuário Henrique não foi encontrado!')
    		}
    	});

    	myPromise
    		.then((validacao) => {              //Ele pega o retorno positivo (resolve) da Promise!
    		return validacao.toLowerCase();     //Manda ele fazer o que quiser com o retorno
    		})
    		.then((modificado) => {
    			console.log(modificado);
    		})
    		.catch((err) => {                   // Pega o retorno negativo (reject) da Promise!
    			console.log(err.toUpperCase());
    		})

    É possível resolver várias promessa de uma vez com o método .all:

    ex:

    	const p1 = new Promise ((resolve, reject) => {
    		setTimeout (() => {
    			resolve('P1 ok!')
    		}, 1000)
    	})
    	const p2 = new Promise ((resolve, reject) => {
    		resolve('P2 está ok!')
    	})
    	const p3 = new Promise ((resolve, reject) => {
    		resolve('P3 está ok!')
    	})

    	const allPromises = Promise.all([p1, p2, p3]).then((data) => {
    		console.log(data)
    	})
    	// ['P1 está ok!', 'P2 está ok!', 'P3 está ok!']

    	obs: Com o setTimeout em p1, o retorno de todas as Promises, em conjunto,
    	ocorrerá apenas após 1s de execução.

    Também é possível utilizar o método race, no qual tem-se apenas o retorno
    da Promise que for executada primeiro. Com a estrutura acima, teríamos:
    // ['P5 está ok!']

    	obs: P1 é resolvido apenas após 1s e P6, apesar de ter o mesmo tempo de
    	execução que P5, "vence a corrida" a que for declarada primeiro.

# URLSEARCHPARAMS()

    Um objeto que implementa URLSearchParams define métodos para se trabalhar
    com a query string.

    Query String:

    	ex: ?nome=henrique&idade=23
    	acesso: window.location.search

    Instanciando:

    	const urlParams = new URLSearchParams(window.location.search);

    Utilizando métodos:

    	const nomeParam = urlParams.get("nome")
    	.get() é um dos métodos!

# .SORT()

_.sort() é um método de mutação_

Ele trabalha _ordenando os elementos de um array_ e retornando o mesmo modificado, de acordo com a função de comparação dada.

Dado uma funcaoDeComparacao(a, b):

- `Se return > 0:` ordena 'a' para 1 índice anterior a 'b'
- `Se return < 0:` ordena 'b' para 1 índice anterior a 'a'
- `Se return = 0:` 'a' e 'b' ficam inalterados em relação uma o outro, mas ordena em relação aos outros elementos.

`Ordenar (crescente) lista numérica:`

	var meusNumeros = [1,4,2,5,3]

	function OrdenarCrescente(listaNumerica) {
		listaNumerica.sort(function ordenar(numero1, numero2) {
			return numero1 - numero2;
		})
		return listaNumerica
	}

	console.log(OrdenarCrescente(meusNumeros))

`Ordenar (descrecente) lista numérica:`

trocar "numero1 - numero2;"
por "numero2 - numero1;"

`Ordenar (crescente) lista de nomes:`

var meusNomes = ['ana','gabriel', 'jofana', 'henrique', 'fernanda']

function OrdenarCrescente(listaDeNomes) {
	listaDeNomes.sort(function ordenar(letra1, letra2) {
		if (letra1 < letra2)
		return -1;
	}) 
  return listaDeNomes
}

console.log(OrdenarCrescente(meusNomes))

`Ordenar (crescente) lista de nomes:`

trocar "if (letra1 < letra2)"
por "if (letra2 < letra1)"

# .MAP()

_.map() é um método construtor_

O método .map() _invoca a função_ callback, passada no argumento, _para cada elemento do array_ e devolve um novo como resultado.

`ex: `

	const array1 = [1, 4, 9, 16];
	const map1 = array1.map(x => x * 2);
	console.log(map1); // [2, 8, 18, 32]

# .FOREACH()

_.forEach() é um método de mutação_

O método .forEach() executa uma dada função para cada elemento de um array.
Seu uso é muito similar ao de .map()

# .FILTER()

_.filter() é um método construtor_

O método .filter() cria um novo array com os _elementos que passarem no teste_ da função fornecida

`ex: `
	const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

	const result = words.filter(function checkLength(word) {
		return (word.length > 4)
	});
	console.log(result);

_dica:_ mesclar com `.includes()`, o qual verifica se o array possui determinado elemento, retornando true ou false.

# FIND.()

O método .find() _retorna o valor do primeiro elemento do array que satisfizer a função teste fornecida_. Caso contrário, retorna undefined.

ex: 

	var studentRecords = [
		{ id: 313, name: "Frank", paid: true, },
		{ id: 709, name: "Brian", paid: false, },
		{ id: 105, name: "Henry", paid: false, },
	]

	function getStudantById(studentId) {
  return studentRecords.find( function matchId(record) {
    return (record.id == studentId); *ao inves de retornar true ou false, o find devolve o obj*
  })
	} 
	console.log(getStudantById(709))

# TIPOS E COERÇÃO:

`Tipos Primitivos: `

undefined  
null
boolean
string
symbol
number
bigInt
object

Em JavaScript variável não possuem tipos, valores sim.
O tipo de uma variável dita o comportamento que ela terá

`NaN: `

É um valor do tipo Number, porém um número inválido!

Quando temos um retorno NaN, significa que nossa operação retorna um valor NaN, e não um valor que não
é um número.

ex:

var greeting = "Hello, class!";
var something = greeting / 2;  
something; // NaN
Number.isNaN( something ); // true
Number.isNaN( greeting ); // false

Como podemos ver, "greeting" não armazena um número, mas sim uma string. Portanto na validação diz que não é
NaN, corretamente, pois NaN é do tipo Number. Nunca vai ser Number e string ao mesmo tempo.
Já "something" retorna que é NaN, corretamente, pois something resulta de uma operação matemática, o que
sempre nos retorna um número. porém, nesse caso, é um número inválido.

obs: NaN é o único valor em todo o JS que é diferente de si mesmo.
ex: something === something // false
uauuu. de quebra já podemos ver que === nem sempre retorna a verdade absoluta.

`isNaN(): `

Como não conseguimos utilizar o === para dizer se um valor é NaN ou não, JS originalmente
trás o utilitário isNaN(). Passando um número retorna false e assim por diante.
Mas temos um problema como no exemplo a seguir:
isNaN("String qualquer") // true
mas... isso não é NaN. É uma string.
Isso ocorre pois isNaN faz a coerção do valor para Number antes de checar se é NaN (bug!
Com isso, ao converter a string para um número, para qual número converte? para NaN.
Isso é um erro no JS.
Para contornar esse prolema...

`Number.isNaN(): `

Este utilitário chegou depois contornando o problema com o NaN. O novo não realiza a
coerção para Number antes de checar, trazendo uma validação plausível.

`New: `

Objetos fundamentais exigem o uso de "new" para instanciamento de novas instancias.

    Use new em:         Não use new em:
    - Object()          -  String()
    - Array()           -  Number()
    - Function()        -  Boolean()
    - Date()
    - RegExp()
    - Error()

ex:

var yesterday = new Date("March 6, 2019");
yesterday.toUTCString();
// "Wed, 06 Mar 2019 06:00:00 GMT"

const soma = new Function("a","b","return a+b");
soma(2,5) // 7

`Booleans: `

Falsy: Truthy:

- "" - todo o resto
- null
- NaN
- false
- undefined
- 0 e -0

`Negative Zero: `

    var trendRate = -0;
    trendRate === -0; // true

    trenRate.toString(); // "0" 		opa! Este comportamento se da como uma tentativa do JS de não pensarem que o -0 em uma string é um bug.
    trendRate === 0; 		 // true; 	triple equals mentindo novamente...
    trendRate < 0; 			 // false;
    trendRate > 0;  		 //	false;

    Object.is(trendRate, -0); // true;	maneira mais segura que o triple equals de checar
    Object.is(trendRate, 0); 	// false;

    	Object.is()

    	Este método checa se dois valores são iguais.
    	Além disso, "Corrige" duas validações que === não conseguem fazer:

    	Quando utilizamos Object.is(NaN,NaN) retorna-se true. Mas sabemos que NaN's nunca possuem o mesmo valor.
    	Isso acontece porque o método trata todas as instâncias de NaN como o mesmo objeto.

    	Além disso, Object.is() também valida corretamente negative zeros.
    		-0 === 0 // true
    		-0 != 0 // false
    		Object.is(-0,0) // false

    Math.sign() com -0:

    		Math.sign(-3) // -1
    		Math.sign(3)  // 1
    		Math.sign(-0)	// -0 wtf?
    		Math.sign(0)	// 0 wtf?

    		no caso e 0 e -0, o math.sign trás esse retorno específico. Mas é possível "corrigí-lo" caso desejado:

    			function sign(v) {
    				return v !== 0? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
    			}

`Coerção: `

    O JS possui padrões de coerção que são adotados:
    	Number + Number = Number
    	String + String = String
    	Number + String = String
    	String + Number = String

`Abstract operations: `

Não são métodos do js que podem ser chamados e utilizados, são operações conceituais, ou seja, "coisas" que
fazemos no js.

_1._ ToPrimitive(hint) // hint é opcional: number, string ou nada.

    Torna um valor não primitivo em um valor primitivo

    hint: "number":
    	Executa valueof(). Se retornar um primitivo, ok.
    	Senão, executa toString(). Se retornar um primitivo, ok.
    	Senão, retorna um erro.

    hint: "string":
    	Executa toString(). Se retornar um primitivo, ok.
    	Senão, executa valueOf(). Se retornar um primitivo, ok.
    	Senão, retorna um erro.

    Tenhamos em mente: se tentarmos utilizar um valor não primitivo em algo que requer um valor primitivo, como
    	operações matemáticas ou concatenações, por baixo dos panos js vai realizar essa coerção utilizando o
    	algorítmo toPrimitive(), invocando ou o valueOf() ou toString().

_2._ ToString

Pega qualquer valor e nos retorna sua representação em forma de string.
Funciona invocando ToPrimitive(string) (como a hint é "string", faz primeiro toString() e dps valueOf()).

    										 []		"" 					// empty array -> empty string... ??? mts coisas podem se tornar um array vazio. Como vou saber o que era antes?
    								[1,2,3]		"1,2,3""   	// se tivermos contúdo no array, ele o retorna.
    			[null, undefined]		"," 				// EXCETO null e undefined. Eles somem.
    				[[[],[],[]],[]]		",,,"
    								 [,,,,]		",,,"
    								 		 {}		"[object Object]"
    		{idade: 9, imc: 20}		"[object Object]  // Vai fazer isso com todo objeto

{toString(){return "X";}} "X" // É possível sobrescrever o comportamento

_3._ ToNumber

Funciona invocando ToPrimitive(number) (como a hint é "number", faz primeiro valueOf() e dps toString()).

    			""		0				// O que não é bom, pois a string vazia passa a ideia de sem valor. 0 é um valor válido. Poderiam usar NaN...
    			"0"		0
    		"-0"		-0
    	" 009 "		9
    "3.14159"		3.14159
    		"0."		0
    		".0"		0
    			"."		NaN			hm...
    	"Oxaf"		175  		// Funciona com hexadecimais e outras bases.
    		false		0
    		true		1
    		null		0				hm...
    undefined		NaN			hm...

Mas, usando com não-primitivos [] e {}, por convenção, temos o retorno valueOf() { return this; }. Ou seja,
essencialmente retorna a si mesmo. Tem o efeito de adiar o valueOf() e ir diretamente para o toString().
Pode-se pensar que: transformar um objeto em número é, essencialmente, transformá-lo em uma string.

    								[""]		0
    								["0"]		0
    							["-0"]		-0
    							[null]		0			//[null] -> toString -> [] -> toNumber -> 0
    					[undefined]		0
    							[1,2,3]		NaN
    						[[[[]]]]		0
    								{..}		NaN

{value0f(){return 3;}} 3

_4._ ToBoolean
 
Sempre que você precisar algo que não é boolean em um lugar que necessita de boolean, essa operação ocorrerá.
Essa operação é menos algorítmica e mais "lógica". "Isso deve ser false ou true?"

    	Falsy:			Truthy:
    				""		Todo o resto
    			null
    		   NaN
    	   false
     undefined
    		0 e -0

_Boxing_

    Não tem como acessar propriedades de valores primitivos. Mas... nós fazemos isso, por
    exemplo, em 'variavel.length'. Como??
    Isso ocorre pois o js implicitamente faz coerção do valor para objeto, permitindo acessar essas propriedades.
    Isso é chamado Boxing!
    E é por isso que dizem "no js tudo é um objeto"...
    Mas não é! É um valor primitivo otimizado para acessarmos propriedades.

`Corner Cases da Coerção (exceções): `

    Number("");								// 0		oops!
    Number(" \t\n");					// 0		oops!
    Number(null);							// 0		oops!

Number(undefined); // NaN
Number([]); // 0
Number([1,2,3]); // NaN
Number([null]); // 0 oops!
Number(undefined); // 0 oops!
Number({}); // NaN

    String(-0);								// "0"		oops!
    String(null);							// "null"
    String(undefined);				// "undefined"
    String([null]);						// ""		oops!
    String([undefined]);			// ""		oops!

    Boolean(new Boolean(false));	// true		oops!

    Problema de conversão de booleans para number:

    	3 > 2; // true
    	2 > 1 // true
    	3 > 2 > 1 // false  oops!

    	destrinchando o que acontece:

    	(3 > 2) // true
    	(true) > 1 // js tenta converter true para number
    	1 > 1 // false

# IGUALDADES

`Tipos de igualdade: `

== permite coerção quando os tipos são diferentes (aceita diferentes tipos de valor)
é seguro utilizar quando os tipos das variáveis com as quais se está trabalhando estão claros.
não é necessariamente ruim.

=== não permite coerção (não aceita diferentes tipos de valor)

_Ambos checam o tipo. A diferença é o que fazem com essa informação._

Quando os tipos são iguais, == faz comparação ===, sendo exatamente iguais nesse caso.

`Igualdade coerciva (==): `

Vamos ver o que o == faz no momento da coerção

**1:** null e undefined apenas são iguais entre si, sendo diferentes de todos os outros tipos no js.

ex de uso:

var workshop1 = { topic: null }
var workshop2 = {}

if (
(workshop1.topic === null || workshop1.topic === undefined) &&
(workshop2.topic === null || workshop2.topic === undefined)
) {
...
}

tem benefício em deixar explícito dessa forma, utilizando ===? é melhor para o leitor?
podemos apenas fazer:

if (
workshop1.topic == null &&
workshop2.topic == null
) {
...
}

muito melhor! assim, dizemos apenas: se .topic for nulo ou não existir faça...

**2:** == Prioriza comparações numéricas, aplicando toNumber(x) em strings e booleans.

ex de uso:

var oi = 16;
var ola = myProperty.value;

if (Number(oi) === Number(ola)) {
...
}

Desnecessário, né? Muito mais vantajoso fazermos:

if (oi == ola) { ... }

**3:** Se usarmos == com algo que não é um primitivo, ToPrimitive(x) é invocado. Disso, já podemos concluir o seguinte: _== compara apenas primitivos_.

ex de (mal) uso:

var oi = 42;
var ola = [42];

// if (oi == ola) ...
// if (42 == "42") ... // ToPrimitive: transforma o array em string.
// if (42 === 42) ... // ToNumber: == prefere trabalhar com Number.
oi = ola.

mas... isso é perigoso, daqui saem muitas exceções e potenciais bugs.

_E a solução não é usar ===! O problema vai além, o programa não deveria comparar array com números!_

`== Sumary: `

Se os tipos são os mesmos: ===
Se null ou undefined: igual
se não-primitivo: ToPrimitive
Prefere: ToNumber

`== Corner Cases: `

_1:_ [] == ![] // true

omg! pq isso acontece?

var oi = [];
var ola = [];

if (oi == !ola) ...
if ([] == false) ... // !ola é boolean
if ("" == false) ... // array é não-primitivo, invoca ToPrimitive, virando string.
if (0 == 0) ... // == prefere trabalhar com Number, invocando ToNumber
if (0 === 0) ... // como são do mesmo tipo, faz ===
// true

_2:_ Booleans

Não devemos fazer [] == true ou [] == false, por ex. em um if:

    var meuArray = [];

    const validacao = function(x) {
    	if (x === true) {return 'array deu true'}
    	else {return 'array deu false'}
    }; validacao(meuArray) // 'array deu false'

omg! pq isso acontece? deveria dar true!

mesma coisa de sempre: [] -> "" -> 0 -> false.

Portanto, façamos a operação básica, invocando ToBoolean, sem == ou ===:

    if(oi) ... // [] -> Boolean([]) -> true

`Avoiding corner cases: `

**Avoid:**

1. == com 0 ou "" ou " "
2. == com não-primitivos (é uma coerção que fica ok com os primitivos)
3. == true ou == false. Faça acontecer ToBoolean ou use ===

`The case for preferring ==: `

== não se trata de comparações com tipos desconhecidos
=== não se trata de comparações com tipos conhecidos, opcionalmente em que conversões são úteis.

Se ambos os tipos são os mesmos, == é idêntico a ===
Usar === seria desnecessário.

Pois,

Assim como === não faz sentido com tipos diferentes...
é igualmente desnecessário == quando os tipos são os mesmos.

_Se você conhece os tipos em uma comparação (ou seja, se está óbvio para o leitor):_

Sendo os tipos diferentes, usar === não funcionaria.
Nesse caso, use o mais poderoso ==, ou apenas não os compare.

O equivalente a um == seria usar dois ou mais ===, sendo este mais lento! Não há impacto relevante em performace, são apenas microsegundos, mas estamos apenas atestando que utilizar dois ou mais === NÃO é melhor do que usar um ==.
Prefira o "mais rápido"

Além disos, o programa é muito mais legível utilizando 1 == do que 2+ ===

_Se você não conhece os tipos em uma comparação (ou seja, não está óbvio para o leitor):_

Não saber os tipos significa que você não conhece o código completamente. Tudo bem não saber todos os tipos 100% do tempo, mas não deve ser comum.
O melhor cenário é refatorar o código.

Não saber os tipos deve ser óbvio para o leitor, para ele pelo menos saber que não sabe.
O sinal mais óbvio de que não se sabe os tipos é o ===.

Não saber os tipos é equivalente a assumir que ocorrerá coerção.

Em suma, se você não consegue/não vai usar tipos óbvios e conhecidos, === é a única escolha razoável a se utilizar.

# STATIC TYPING

`TypeScript & Flow`

- Catch type-related mistakes
- Communicate type intent (makes types obvious)
- Provide IDE feedback

Caveats

- Inferencing is best-guess
- Annotations are optional (if you don't put an annotation on a variable, it will default to the "any" type, and there's no benefit on it - watch out the false sense of security)
- Any part of the application that isn't typed introduces uncertainty
  So... it tells you what is happening in compile time, but in run time you just have to hope that nothing bites you.

`Inferencing`

TypeScript & Flow example:

    var teacher = "Kyle"; // de maneira mais clara: var teacher: string = "Kyle";

    teacher = { name: "Kyle"};
    // Error: can't assign object to string

`Custom Types`

Example of creating a custom type:

    type student = { name: string }; // student is an object with a "name" property that is a string.

    function getName(studentRec: student): string {
    	return studentRec.name;
    }

    var firstStudent: student = { name: "Frank" };
    var firstStudentName: string = getName(firstStudent);

`Validating Operand Types`

Example:

    var studentName: string = "Frak";
    var studentCount: number = 16 - studentName;
    // error: can't substract string

`TypeScript & Flow pros and cons`

Pros

- They make types more obvious in code.
- Familiarity: they look like other languages's type systems.
- Extremely popular these days.
- They're very sophisticated and good at what they do.

Cons

- They use "non-JS-standard" syntax (or code comments).
- They require a build process, which raises the barrier to entry
- Their sophistication can be intimidating to those without prior formal types experience
- + The sophistication makes the tool complex very quickly, syntax explodes exponentially in complexity. The more complex the application you're working on get, the less code looks like js.
- They focus more on "static types" (variables, parameters, returns, properties, etc) with a one type always and forever, than value types. It's not the js DNA.

`wraping up`

Js has a (dynamic) type system, which uses various forms of coercion for value type conversion, including equality comparisons. 
However, the prevailing response seems to be: avoid as much of this system as possible, and use === to "protect" from needing to worry about types.
Part of the problem with avoidance of whole swaths of js, like pretendind === saves you from needing to know types, is that it tends to systemically perpetuate bugs.
You simply cannot write quality js programs without knowing the types involved in your operators
Alternately, many choose to adopt a different "static types" system layered on top.
While certainly helpful in some respects, this is "avoidance" of a different sort.
Apparently, js's type system is inferior so it must be replaced, rather than learned and leveraged.
Many claim that js's type system is too difficult for newer devs to learn, and that statit types are (somehow) more learnable (buuuut, it's way simplier to learn the js nuances than a role new language).
Kyle's (teacher) claim: The better approach is to embrace and learn JS's type system, and to adopt a coding style which makes types as obvious as possible.
By doing so, you will make yout code more readable and more robust, for experienced and new developers alike.
As an option to aid in that effort, Kyle created Typl (https://typl.dev/), which he believes that embacres and unlocks the best parts of the js's types and coercion. 


# FILOSOFIA DA COERSÃO

    Não se lida com coerção evitando-a. Ao invés disso, adote uma maneira de codar que deixe os valores
    óbvios e lineares. É a única maneira segura de se lidar.

    Um bom programa js abrange coerção, assegurando-se de que os tipos envolvidos nas operações estão

claros
Criar funções polifórmicas, que aceitam diversos tipos de valores e retornam diferentes resultados
de acordo com o valor, e depois "corrigir" usando === é um erro!
Faça uma função, por exemplo, que aceite apenas números, ou apenas strings. Ou apenas números e strings,
explicitando os dois tipos aceitos, e assim tendo em mente quais são as exeções com as quais se deve
preocupar.
Pode-se escolher fazer um programa mais óbvio em relação a como se gerencia os tipos, evitando ou
aceitando mais problemas como consequência da escolha.

    Uma das grandes vantagens da coerção implícita é esconder detalhes desnecessários, fazendo com que o
    leitor foque e tenha clareza no que é realmente importante no código.

    É IRRESPONSÁVEL não fazer uso, intencionalmente, de um recurso que melhore a legibilidade do código.

# OBJETOS FUNDAMENTAIS (aka Built-In Objects or Native Functions):

Além dos tipos primitivos, JS trás objetos fundamentais

# ESCOPO:

Escopo é onde a informação está (qual camada de informação)

    ex:
    	var teacher = "Kyle";

    	function otherClass() {
    		teacher = "Suzy";				// Altera valor de uma variável no escopo global, fora do seu escopo.
    		topic = "React";        // Como não encontra no seu escopo nem no global, cria uma variável no 
    		console.log("Welcome!");	  escopo global
    	}
    	otherClass(); // Welcome!
			ChooseStudent() // "ReferenceError"
    	teacher; // Suzy
    	topic;	// React 

_O js organiza o escopo com funções e blocos, em tempo de compilação, e não de execução._
_A execução do código não altera a organização feita em tempo de compilação. (org. = escopos)_

# ESCOPO E FUNCTION EXPRESSION

_Function expression != function declaration_

	function teacher() { ... }

	var myTeacher = function anotherTeacher() {
		console.log(anotherTeacher);
	};

	console.log(teacher); // ...
	console.log(myTeacher); // ...
	console.log(anotherTeacher); // "ReferenceError" it ocours because function expressions makes their scope their own place in the "scope hierarchy"

`Expressões de funções:` 

uma expressão de função por si só é vista como um valor, podendo ser atribuídas a variáveis,
passadas como argumentos para outras funções, ser retornadas por outras funções, etc.
Isso faz delas "Valores de primeira classe".

_sobre arrow functions:_ como são funções anônimas (não possuem nome), é necessário que
o leitor do código se dedique a compreender o que a função faz. quando temos uma função
nomeada torna-se óbvio o que ela faz. Desta forma, muitas vezes é melhor darmos um passo
para trás e usar uma função nomeada

ex:

	getPerson()
	.then(person => getData(person.id))		// Leitor precisa se dedicar em entender o que acontece
	.then(renderData);

	getPerson()
	.then(function getDataFrom(person){
		return getData(person.id);					// Fica fácil entender o que está acontecendo.
	})
	.then(renderData);

`Function types hierarchy:`

(Named) Function Declaration
					>
Named Function Expression
					>
Anonymous Function Expression

`Named expression:`

A named expression is a function expression that has been given a name

_anonymous expression:_
 var clickHandler = function() { ... };

_named expression:_
 var keyHandler = function keyHandler() { ... };

Always, 100%, prefer to use _named expressions_!
 - Reliable function self-reference inside of itself (recursion, acess property, etc)  
 - More debuggable stack traces
 - More self-documenting code 

`IFFE (immediately Invoked Function Expression):`

( função(/* ... */) )()

A função é imediatamente executada assim que finalizada sua escrita. Além disso, temos
um escopo encapsulado dentro da mesma. então se eu atribuir valor anan uma variável do meu
escopo global dentro da função, quando sair para fora da função essa minha variável ainda
possuirá seu valor original

# ADVANCED SCOPE

`Lexical scope:`

It's related to decisions made at author time, about which function go inside another, where (which scope level) a variable is declared, etc. Decided at compile time, not at run time (nothing is modified by what happens during the program execution, in opposite to `dinamic scope`).
 Js is a lexically scoped language. 

`Dynamic Scope:`

As already said, in this case the scope varies according to the program during run time. 
But... In practice, what does that means?
An example:

	var teacher - "Kyle";
	function ask(question) {
		console.log(teacher, question); 
	}
  
	function otherClass() {
		var teacher = "Suzy";
		ask("why?");
	}
	otherClass();

In this example, at line 1240 we look at the scope where "teacher"'s been referenced from.
But, with dynamic scope, it don't even consult the lexical scope, looking for where the function "ask()" is called from. It means that been called from 100 different places, the function will return 100 different results. (works like the .this utility)

_warning: js DON'T work with dynamic scope_

`Function Scoping`

This concept comes up from the idea of protecting the code and yourself from future problems involving scope. For example, someone accidentaly assigning a new value to a variable that the code depends on, by not knowing that the already have a variable with the same name that's been choosed.
To avoid this problem, we make our info "private", limiting the acess to the variable and it's value.

`IIFE Pattern`

"Immediately invoked function expression"

The term speaks for itself. An example:

 ( function lover() {
	var girlfried: 'fernanda'
	console.log(girlfriend)
 } )`()`;

If you pay attention, you'll see that we declare the function and immediately invokes it with the `()`

By doing this, we create _a scope just for a single action on our program and then it goes away_. Different from a regular function that we might need to call multiple times. So it don't "pollute" the enclosing scope.

It's _not a function declaration, it's an expression_ (just because of the ()! it's there only for not making it a declaration!) (remember that in function declarations the first word is "function").

`Block Scoping`

Scoping that's done with blocks {}
 
ex.:

	var teacher = "kyle";
	{ 
		let teacher = "Suzy";
		console.log(teacher); // Suzy
	}
	console.log(teacher) // Kyle

obs.:
Don't use "var", because historically var atachs itself to the global scope (we want it to attach to the inner scope).

obs.2: Blocks are not scopes until they have a let or const inside.

ex.2:

function diff(x,y) {
	if (x > y) {
   _let_ tmp = x;
	 x = y;
	 y = tmp;
	}
	return y - x;
}
  
`Choosing let or var`

_"let" indicates a localized usage of a variable_

ex: 

function repeat(fn, n) {
  _var_ result;

  for (_let_ i = 0; i < n; i ++) {
		result = fn(result, i);
	}
	return result;
}

In this example, wouldn't be right to use _let_ in place of _var_, just like the opposite. It will still work (in some cases), but semantically you're saying "I want to use this variable in very specific location", instead of "This variable belongs to the entire function scope".
Imagine the reader trying to figure out your intention.

ex: (_var preferably usage_)
  
function lookupRecord(searchStr) {
	try {
   _var_ id = getRecord(searchStr);
	}
	catch(err) {
   _var_ id = -1;
	}
	return id;
}

Here, if we had used "let" instead of "var" we wouldn't have an id to return at the end of the function.

`Explicit let Block`

function formatStr(str) {
	{ let prefix, rest;					
		prefix = str.slice(0,3);
		rest = str.slice(3);
		str = prefix.toUpperCase() + rest
	}
	if (/^FOO:/.test(str)) {
		return str;
	}
	return str.slice(4);
}   

In this case, we _explicitly_ use a let block to say: "this 2 variables will only be used here, in this small piece of code, and never more". (note how the 2 variables are in the 1st line, making it obvious to the reader).
 
`Const`

_A "const" variable can't be reassigned._
_But it doesn't mean that it's value can't change, which causes missunderstanding and confusion._

ex: 

var color = 'red'
color = 'blue' 		// ok!

const girlfried = 'fernanda'
girlfriend = 'another one'   // error. cons't can't be reassigned

var dogs = ['cookie', 'chicó']
dogs[0] = 'meggie' 		// ok!

Therefore, const doesn't garantee that a variable's value won't change. actually, _it has semantic value_. For example, it should in a small piece of code, 4 to 5 lines, to make clear that a variable (immutable and primitive - strings, numbers and booleans) won't change in that block.

`Hoisting`

Hoisting is not actually a real thing. Js engine does not "hoist" things. it's a language convention that people made up to discuss the ideia of lexical scope without thinking about lexical scope.

It's described by a "magical" behavior of js engine: every time it enters a scope it looks ahead, find all the declarations and make variables for them in the beggining of the program. 
_But js never does this._

What actually happens is the parsing process, where the scopes are defined.

ex. of hoisting: 

nome = 'henrique';
var nome;

ex.2 of hoisting:

sayHi();
function sayHi() {
	console.log('hi')
}

# CLOSURE

`Closure (fecho/encerramento):`

"Closure é quando uma função "lembra" de uma variável que está fora de deu escopo, mesmo que essa função seja passada para outro lugar, como um parâmetro, por exemplo. (isso resgata a ideia de Variável de Primeira Classe)."
Essa "lembrança" se trata de uma hidden property [[ scope ]], a qual trás o contexto em que a função foi invocada. este "contexto" é chamado de PLSRD (persistent lexical scope reference data) ou COVE (Closed over variable environment) (variable environment -> memory) ou Closure. Informalmente, backpack.

ex: 

	function createFunction(array) {
					let i = 0
					function inner(){
									const element = array[i];
									i++;
									return element;
					}
					return inner
	}
	const returnNextElement = createFunction([4,5,6])
	const firstInvoke = returnNextElement()
	const secondInvoke = returnNextElement()
	console.log(firstInvoke)
	console.log(secondInvoke)

A função returnNextElement é retornado como resultado de createFunction(). Ao ser retornada. além da definição da própria função, é retornada a Closure/backpack trazendo a informação de let i = 0. Por isso que, quando chamamos a função, ela é faz a operação i++ mantendo em sua memória qual o atual valor de i.
Por ter tal comportamento (dar, um a um, elementos da minha coleção, conforme a função é chamada), a função é uma Iterator Function.

another ex:

	function makeSizer(size) {
	return function() {
		var resultado = size + 'px';
		return resultado;
		}
	};

	var size6 = makeSizer(6)
	var size12 = makeSizer(12)
	var size15 = makeSizer(15)
	console.log(size12); 			   // '12px'

Explicando o exemplo:

size12 não guarda o valor de 'resultado', que é retornado em makeSizer().
Ela guarda a função anônima criada dentro de makeSizer "function()", com o parâmetro passado (6).
Quando é chamada a função recém-criada size12, esse chamado retorna o retorno de function(6).

Pensando num caso prático, poderia ter 3 botões de definição de tamanho de fonte de texto, para
6px, 12px e 15px. Este botão teria um evento. Um evento pede uma função.
A partir dessa ideia, poderia fazer 3 funções a partir da nossa makeSizer, como se ela fosse uma
"fábrica de funções", tendo então:

	var size12 = makeSizer(12);
	var size14 = makeSizer(14);
	var size16 = makeSizer(16);

Agora temos 3 diferentes funções, que podemos retornar para 3 diferentes eventos, tendo 3 diferentes botões:

	document.getElementById('size-12').onclick = size12;
	document.getElementById('size-14').onclick = size14;
	document.getElementById('size-16').onclick = size16;

_obs: Closure don't close over values. It closes over variables._

ex.:

	for (var i = 1; i <= 3; i++) {
		setTimeout(function() {
			console.log(`i: ${i}`);
		}, i * 1000);
	}
	// i : 4
	// i : 4
	// i : 4
  // the variable keeps being "reminded" and reassigned.

`Module Pattern`

First, showing something that IS NOT a Module pattern:

	var workshop = {
		teacher: "Kyle",
		ask(question) {
			console.log(this.teacher, question);
		},
	};
	workshop.ask("Is this a module?");
	// Kyle Is this a module?

This is a _Namespace pattern_, not a module.

_Module pattern is based on encapsulation_ (the idea of manipulating data and behavior visibility/access).

The state (data) of a module is held by its methods via closure.

_Principle of least exposure privilege_

ex: 
 
	var calculator = (function Module(pow) {
		var publicAPI = { powTwo, }; 
		// here we can define what exactly is exposed (the powTwo func.)
		return publicAPI;

		function powTwo(numberToPow) {
			return Math.pow(numberToPow,pow);
		}
	})(2) // this param "2" is the "pow" used to construct the Module

	console.log(calculator.powTwo(7)) 
	// this param "7" is what the user tells us to apply in powTwo()
	// note that's possible to access calculator.powTwo, but is 
	//  not possible to access calculator.pow. "pow" is hidden.

Another good example of usage is the solution './Deep JS Foundation/Module ex./solution.js'

# OBJECTS

`This`

A palavra-chave "this" faz com que o contexto de uma função seja dinâmico, determinado pela forma como é feita o chamado da função, e não pela forma como foi criada. Diferentemente do visto em Closures, em que o escopo é estático. _This = escopo dinâmico._

*IMPORTANTE: a palavra-chave "this." NÃO SIGNIFICA NADA até que seja feito o chamado. É no chamado que ficará definido!*

Existem _4 regras_ que ditam como funciona.

_1. Implicit binding rule_

ex:

	function ask(question) {
		console.log(this.teacher, question);
	};
	var workshop1 = {
		teacher: "Kyle",
		ask: ask,
	};
	var workshop2 = {
		teacher: "Suzy",
		ask: ask,
	}
	workshop1.ask("I have a question"); // Kyle I have a question
	workshop2.ask("I have a question"); // Suzy I have a question


workshop1.ask diz: "chame ask() com "this" apontando para o objeto "workshop1""
workshop2.ask diz: "chame ask() com "this" apontando para o objeto "workshop2""
Até que a função seja chamada, ".this" aponta para lugar nenhum e não tem referencial de onde buscar "teacher" que será usado.

_2. Explicit binding rule_

Utilizando _.call_ Podemos passar o objeto como o primeiro parâmetro da função chamada, _explicitando o objeto_ para o qual estamos apontando

ex:

	function ask(question) {
	console.log(this.teacher, question);
	};
	var workshop1 = {
		teacher: "Kyle",
		ask: ask,
	};
	var workshop2 = {
		teacher: "Suzy",
		ask: ask,
	}
	ask.call(workshop1, "I have a question"); // Kyle I have a question
	ask.call(workshop2, "I have a question"); // Suzy I have a question

_3. The `new` keyword_

*Ao contrário do senso comum, não está relacionado com construtores de classe."new" é a terceira forma de se chamar uma função, com this. apontando para um novo objeto vazio.*

O que "new" SEMPRE faz ao ser utilizado para chamar uma função:

	1. Cria um novo objeto vazio.
	2. Conecta este novo objeto a outro objeto
	3. Chama a função com this. apontando para o novo objeto.
	4. Se a função não retornar um objeto, ela retorna "this".

_4. Default binding_

Acontece quando nenhuma das outras 3 regras são aplicáveis
Esteja atento a erros:

	var teacher = "Kyle";

	function ask(question) {
		console.log(this.teacher, question);
	}
	function askAgain(question) {
		"use strict";
		console.log(this.teacher, question);
	}

	ask("Is it real?")
	// Kyle Is it real?

	askAgain("Is it real")
	// TypeError  >> Strict mode don't let you reference to an undefined object.

	Se estivesse em Sloppy Mode retornaria: "undefined Is it real?"

`Cases with more than 1 rule (binding precedence)`

Nesses casos, seguimos essa ordem de "questionamentos":

_1._ Is the function called by _new_?
 If so, the newly created object will be the this.
_2._ Is the function called by _call()_ or _apply()_?
 If so, the specified context object will be used (this.).
 Note: _bind()_ effectively uses _apply()_
_3._ Is the function called on a context object (ex: workshop1.ask)?
	If so, the context object will be used (this.).
_4._ DEFAULT: Global object except strict mode

`Arrow Functions & Lexical this`

Arrow functions doesn't define a "this." keyword. So, in this example:

var workshop = { 
	teacher: "Kyle",
	ask(question) {
		setTimeOut(() => {
			console.log(this.teacher, question);
		}, 100);
	},
}
workshop.ask("Is this lexical 'this'?);
// Kyle is this lexical 'this'?

Once arrow functions doesn't have a 'this.' keyword at all, it resolves lexically, going up and looking for a function that defines a 'this.' keyword. In this case, the function ask().

_Same happens when a function is passed as a callback, the method reference needs to be hardbound_

ex: 

 getStudentFromId() {
	return ...
 }
 printRecord(recordIds) {
  var records = recordIds.map(this._getStudentFromId.bind(this)_)
	return ...
 }

# PROTOTYPE

`prototype behavior`

Here we'll explore what happens in the underneaths of classes.
Take the following code of example + the prototype print inside the Deep JS folder:

	function Workshop(teacher) {
		this.teacher = teacher;
	}
	Workshop.prototype.ask = function(question) {
		console.log(this.teacher, question);
	}
	var deepJS = new Workshop("Kyle")
	var reactJS = new Workshop("Suzy")

	deepJS.ask("Is 'prototype' a class?");
	//Kyle Is 'prototype' a class?

	reactJS.ask("Is 'prototype' a class?")
	//Suzy Is 'prototype' a class?

Analysing:

1632: The deepJS Object is created and linked to workshop.prototype
1629: Workshop.prototype has an ask() method, ans that's why:
1635: Even if deepJS doesn't have an ask() method, it's possible to call it with deepJS.ask(), becausa deepJS is linked to workshop.prototype. So, when we call the method and we don't find it inside of our "this." object (deepJS), it's `delegated` one level up the prototype chain, from deepJS to workshop.prototype

Obs:
	- deepJS is an object.
	- deepJS is an instance of workshop.
	- deepJS is an object that contains the "teacher" parameter.

`Classical vs Prototypal inheritance`

The classical inheritance works making a copy of the parent to the child new classes/objects.
But it actually work this way for languages like java and C++.
The so called "class inheritance", _in JS, actually is a "prototype inheritance"!_

_Class inheritance_: makes a copy from the parent to the isntances and childs that extends it.

_Prototype inhetitance_: from a 'parent' object.prototype, when created new objects they aren't copies. they are _linked_ to the 'parent'!

So... `The Class System is Javascript actually is a Prototype System, working by a "behavior delegation" system.`

What happened is that the JS designers tried to put a sugar coat in the Prototype system and call it a class system. 

_That's why classes in JS work differently than Java and C++_, for example.

`OLOO Pattern (Objects Linked to Other Objects)`

Based on only using Objects. No classes, no "new" keywords. Symple as that.

_Class pattern_:

	class Workshop {
		constructor(teacher) {
			this.teacher = teacher;
		}
		ask(question) {
			console.log(this.teacher, question);
		}
	}

	class AnotherWorkshop extends Workshop {
		speakUp(msg) {
			this.ask(msg);
		}
	}

	var JSRecentParts = new AnotherWorkshop("Kyle");

	JSRecentParts.speakUp("Are classes getting better?");
	// Kyle Are classes getting better? 

_OLOO Pattern_:

	var Workshop = {
		setTeacher(teacher) {
			this.teacher = teacher;
		},
		ask(question) {
			console.log(this.teacher, question);
		}
	};
  var AnotherWorkshop = Object.assign( 
    _Object.create_(Workshop),
		{
			speakUp(msg) {
				this.ask(msg.toUpperCase();)
			}
		}
	);

	var JSRecentParts = _Object.create_(AnotherWorkshop);

	JSRecentParts.setTeacher("Kyle");
	JSRecentParts.speakUp("But isn't this cleaner?");
	// Kyle BUT ISN'T THIS CLEANER?

Note that there's no need of new, prototype, constructors, classes, extends, etc. Just objects.
Over the this keyword, the objects act as they share a call context, linked through the prototype chain, calling each others methods when necessary.

Better example of that:

 var AuthController = {
	authenticate() {
		server.authenticate(
			[ this.username, this.password ],
			this.hardleResponse.bind(this)
		);
	},
	handleResponse(resp) {
		if (!resp.ok) this.displayError(resp.msg);
	}
 };

 var LoginFormController = 
  Object.assign(Object.create(AuthController), {
		onSubmit() {
			this.username = this.$username.val();
			this.password = this.$password.val();
			this.authenticate();
		}
		displayError(msg) {
			alert(msg);
		}
	});

# Promises:

The promise object carries the result of an asynchronous operation.

It has these properties

  _value_: stores what the operation returned to the promise object as result.

  _onFulfilled_: stores the function passed with the _then()_ method to be executed when a _value_ is returned, which is going to be it's argument.

  _onRejection_: stores the function passed with the _catch()_ method (or as a second argument of the then() method) to be executed when an _error_ is returned, instead of the expected. 


The _then()_ method

  What it exactly is: Stores a function to run later, automatically, when the background task that came out of _fetch()_ call previously completes and the _value_ probably gets updated
  Obs: When value is returned, the function don't immediately is invoked. It goes to the _microtask queue_ (not callback queue!).

_Callback Queue vs Microtask Queue_

  Goes to the microtask queue functions that are "registered" by the Web Browser (e.g. onFulfillment functions).
  Goes to the callback queue functions that are "registered" by the JavaScript (e.g. setTimeout).
	Microtasks have priority over callbacks to go to the call stack (where it gets executed).
 
A promise is in one is these states:

  _pending_: initial state, neither fulfilled nor rejected.
  _fulfilled_: meaning that the operation was completed successfully.
  _rejected_: meaning that the operation failed.

