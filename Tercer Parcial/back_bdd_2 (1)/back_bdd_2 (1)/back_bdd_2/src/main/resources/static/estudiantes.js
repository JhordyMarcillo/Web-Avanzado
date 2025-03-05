const apiUrl = "http://localhost:9090/api/estudiantes";

document.addEventListener("DOMContentLoaded", function() {
    cargarEstudiantes();
});

function cargarEstudiantes() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById("estudiantes-lista");
            tabla.innerHTML = "";
            data.forEach(est => {
                tabla.innerHTML += `
                    <tr>
                        <td>${est.id}</td>
                        <td>${est.nombre}</td>
                        <td>${est.apellido}</td>
                        <td>${est.email}</td>
                        <td>${est.fechaNacimiento}</td>
                        <td>
                            <button class="btn btn-info" onclick="irANotas(${est.id})">Agregar Nota</button>
                            <button class="btn btn-danger" onclick="eliminarEstudiante(${est.id})">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => console.error("Error al cargar estudiantes:", error));
}