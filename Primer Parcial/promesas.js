//Las promesas se refieren a procesos que ya están sucediendo, 
//que se pueden encadenar con funciones de devolución de llamada


function procesarPago(total) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = Math.random() < 0.5; 
  
        if (exito) {
          resolve("Pago exitoso");
        } else {
          reject(new Error("Error en el pago"));
        }
      }, 1000); 
    });
  }

  const totalAPagar = 100;
  procesarPago(totalAPagar)
    .then(resultado => {
      console.log(resultado); 
    })
    .catch(error => {
      console.error(error.message); 
    });