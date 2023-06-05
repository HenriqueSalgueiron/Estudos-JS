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

