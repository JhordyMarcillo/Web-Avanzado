const apiUrl = "http://localhost:9090/api/notas";

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const estudianteId = params.get("id");

    if (estudianteId) {
        console.log("ID del estudiante:", estudianteId);
        document.getElementById("estudiante").value = estudianteId;
    }

    cargarNotas();
});

function cargarNotas() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById("notasTable");
            tabla.innerHTML = "";
            data.forEach(nota => {
                const fila = `
                    <tr>
                        <td>${nota.id}</td>
                        <td>${nota.asignatura}</td>
                        <td>${nota.nota}</td>
                        <td>${new Date(nota.fechaRegistro).toLocaleDateString()}</td>
                        <td>${nota.estudiante ? nota.estudiante.id : "N/A"}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="eliminarNota(${nota.id})">Eliminar</button>
                            
                        </td>
                    </tr>`;
                tabla.innerHTML += fila;
            });
        })
        .catch(error => console.error("Error al cargar notas:", error));
}

//nueva nota
document.getElementById("notaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const asignatura = document.getElementById("asignatura").value;
    const nota = document.getElementById("nota").value;
    const estudianteId = document.getElementById("estudiante").value;

    fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            asignatura: asignatura,
            nota: parseFloat(nota),
            estudiante: { id: parseInt(estudianteId) }
        })
    })
        .then(response => response.json())
        .then(() => {
            alert("Nota agregada correctamente");
            cargarNotas();
            document.getElementById("notaForm").reset();
        })
        .catch(error => console.error("Error al agregar nota:", error));
});

// Eliminar una nota
function eliminarNota(id) {
    if (confirm("¿Seguro que deseas eliminar esta nota?")) {
        fetch(`${apiUrl}/${id}`, { method: "DELETE" })
            .then(() => {
                alert("Nota eliminada correctamente");
                cargarNotas();
            })
            .catch(error => console.error("Error al eliminar nota:", error));
    }
}
