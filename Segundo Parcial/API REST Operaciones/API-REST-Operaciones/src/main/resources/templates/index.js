function calcular() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const operacion = document.getElementById("operacion").value;

    if (numero1 === "" || numero2 === "") {
        alert("Por favor, ingrese ambos números.");
        return;
    }

    fetch(`/api/calculadora/operar?numero1=${numero1}&numero2=${numero2}&operacion=${operacion}`)
.then(response => response.json())
        .then(data => {
            document.getElementById("resultado").innerText = `Resultado: ${data.resultado}`;
        })
        .catch(error => {
            console.error("Error al obtener el resultado:", error);
            document.getElementById("resultado").innerText = "Error en la operación.";
        });
}