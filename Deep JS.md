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
- They require\* a build process, which raises the barrier to entry
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
final anotação


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
    		teacher = "Suzy";					 // Está alterando o valor de uma variável no escopo global, ou seja, de fora do seu escopo.
    		topic = "React";           // Cria uma variável no escopo global
    		console.log("Welcome!");
    	}
    	otherClass(); // Welcome!
    	teacher; // ?
    	topic;	// ?

Expressões de funções:

    uma expressão de função por si só é vista como um valor, podendo ser atribuídas a variáveis,
    passadas como argumentos para outras funções, ser retornadas por outras funções, etc.
    Isso faz delas "Valores de primeira classe".

    sobre arrow functions: como são funções anônimas (não possuem nome), é necessário que
    o leitor do código se dedique a compreender o que a função faz. quando temos uma função
    nomeada torna-se óbvio o que ela fa. Desta forma, muitas vezes é melhor darmos um passo
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

IFFE (immediately Invoked Function Expression):

    ( função(/* ... */) )()

    A função é imediatamente executada assim que finalizada sua escrita. Além disso, temos
    um escopo encapsulado dentro da mesma. então se eu atribuir valor anan uma variável do meu
    escopo global dentro da função, quando sair para fora da função essa minha variável ainda
    possuirá seu valor original

Closure (fecho/encerramento):

    "Closure é quando uma função "lembra" de uma variável que está fora de deu escopo, mesmo
    que essa função seja passada para outro lugar, como um parâmetro por ex (isso resgata a
    ideia de Variável de Primeira Classe)."

    ex:

    		function makeSizer(size) {
    		return function() {
    			var resultado = size + 'px';
    			return resultado;
    		};
    	};

    	var size6 = makeSizer(6)
    	var size12 = makeSizer(12)
    	var size15 = makeSizer(15)
    	console.log(size12); 			   // '12px'

    Observações importantes:

    	Na linha 448, size12 não guarda o return de resultado.
    	Ela guarda a função anônima criada dentro de makeSizer "function()", com o parâmetro passado (6).
    	Na linha 451, é chamada a função recém criada size12. Esse chamado retorna o retorno de function(6).

    	Pensando num caso prático, poderia ter 3 botões de definição de tamanho de fonte de texto, para
    	6px, 12px e 15px. Este botão teria um evento. Um evento pede uma função.
    	A partir dessa ideia, poderia fazer 3 funções a partir da nossa makeSizer, como se ela fosse uma
    	"fábrica de funções", tendo então:

    		var size12 = makeSizer(12);
    		var size14 = makeSizer(14);
    		var size16 = makeSizer(16);

    	Agora temos 3 diferentes funções, que podemos retornar para 3 diferentes eventos, tendo 3 diferentes
    	botões:

    		document.getElementById('size-12').onclick = size12;
    		document.getElementById('size-14').onclick = size14;
    		document.getElementById('size-16').onclick = size16;

