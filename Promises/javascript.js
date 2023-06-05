 /*// Criação de promessa

const validateName = new Promise( (resolve, reject) => {  // É prometido um retorno (resolve ou reject)

  const nome = 'Henrque'

  if(nome === 'Henrique') { 
    resolve('Usuário Henrique encontrado!')
  } else { 
    reject('O usuário Henrique não foi encontrado!')
  }
}); 

validateName
  .then((validacao) => {              //Ele pega o retorno positivo (resolve) da Promise!
  return validacao.toLowerCase();          //Manda ele fazer o que quiser com o retorno
  })
  .then((modificado) => {
    console.log(modificado);
  })
  .catch((err) => {                   // Pega o retorno negativo (reject) da Promise!
    console.log(err.toUpperCase());
  }) 
*/

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