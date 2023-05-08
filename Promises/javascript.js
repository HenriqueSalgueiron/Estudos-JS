// Criação de promessa

const validateName = new Promise( (resolve, reject) => {

  const nome = "Henrique"

  if(nome === "Henrique") { 
    resolve("Usuário Henrique encontrado!")
  } else { 
    reject("O usuário Henrique não foi encontrado!")
  }
}); 

validateName.then((data) => {
  console.log(data);
}) 