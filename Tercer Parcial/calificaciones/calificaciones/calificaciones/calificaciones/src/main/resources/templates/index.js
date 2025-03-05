// Obtener la lista de alumnos
function obtenerAlumnos() {
    fetch("/alumnos")
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById("listaAlumnos");
            lista.innerHTML = "<ul>";
            data.forEach(alumno => {
                lista.innerHTML += `<li>ID: ${alumno.id} - ${alumno.nombre} - 
                Nota: ${alumno.nota} - Calificación: ${alumno.calificacion}</li>`;
            });
            lista.innerHTML += "</ul>";
        })
        .catch(error => console.error("Error al obtener alumnos:", error));
}

// Agregar un nuevo alumno
function agregarAlumno() {
    const nombre = document.getElementById("nombre").value;
    const nota = parseFloat(document.getElementById("nota").value);

    fetch("/alumnos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, nota })
    })
        .then(() => {
            alert("Alumno agregado");
            obtenerAlumnos();
        })
        .catch(error => console.error("Error al agregar alumno:", error));
}

// Actualizar la nota de un alumno
function actualizarNota() {
    const id = document.getElementById("idActualizar").value;
    const nuevaNota = parseFloat(document.getElementById("nuevaNota").value);

    fetch(`/alumnos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nota: nuevaNota })
    })
        .then(() => {
            alert("Nota actualizada");
            obtenerAlumnos();
        })
        .catch(error => console.error("Error al actualizar nota:", error));
}

// Eliminar un alumno
function eliminarAlumno() {
    const id = document.getElementById("idEliminar").value;

    fetch(`/alumnos/${id}`, { method: "DELETE" })
        .then(() => {
            alert("Alumno eliminado");
            obtenerAlumnos();
        })
        .catch(error => console.error("Error al eliminar alumno:", error));
}
