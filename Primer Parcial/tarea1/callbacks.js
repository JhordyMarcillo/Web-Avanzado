//Los callbacks son las funciones callback no son más que un tipo de funciones que se 
//pasan por parámetro a otras funciones.

const letras = ["A", "B", "C", "D", "E", "F", "G"];

function action(elementos, index) {
  console.log(`pos=${index} letter=${elementos}`);
}

// Por cada item del array, ejecuta action()
letras.forEach(action);