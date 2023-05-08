// exemplo 2:

let a = 5
let b = 10 

let c = (num1, num2) => num1 + num2; // estou declarando a função!
console.log('ex1:\n',`log1:`, c) // Se faço isso, não printo retorno, printo a função 
console.log(`log2:`, c(a,b)) // Se faço isso, printo o retorno com param a, b

// exemplo 1:

let roupas = [
  { produto: 'camisa', preço: 25, cor: 'amarela'},
  { produto: 'calça', preço: 80, cor: 'azul'},
  { produto: 'jaqueta', preço: 100, cor: 'preto'},
  { produto: 'camiseta', preço: 15, cor: 'rosa' },
  { produto: 'calção', preço: 20, cor: 'azul' },
];

let precoMaiorQue50 = roupas.filter((roupa) => {
  return roupa.preço > 50;
})
console.log('ex2:\n', precoMaiorQue50)

// exemplo 3: 


