//async se usa para declarar una función asincrónica. 
//Esto significa que la función devolverá siempre una promesa

//await solo puede ser utilizada dentro de funciones async. 
//Se utiliza para esperar que una promesa se resuelva o se rechace antes de continuar 
//con la ejecución del código.

function Resuelto() {
    return new Promise((Resuelto) => {
      setTimeout(() => {
        Resuelto('Llamada finalizada!');
        //retraso de 2seg. 
      }, 2000);
    });
  }
  
  async function Llamada() {
    console.log('Llamando...');
    //se espera que esta funcion se ejecute para que se ejecute la siguiente
    const result = await Resuelto();
    console.log(result);
  }
  
  Llamada();
  