document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const alumnosTable = document.getElementById('alumnosTable').getElementsByTagName('tbody')[0];
    const generateReportButton = document.getElementById('generateReport');
    const ctx = document.getElementById('notasChart').getContext('2d');
    const alumnoForm = document.getElementById('alumnoForm');

    let alumnos = [];
    let chart;

    // Cargar alumnos al iniciar
    loadAlumnos();

    // Manejar el envío del formulario
    alumnoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

        const nombre = document.getElementById('nombre').value;
        const nota = parseFloat(document.getElementById('nota').value);

        const nuevoAlumno = { nombre, nota };

        // Enviar el nuevo alumno al backend
        fetch('/alumnos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoAlumno),
        })
            .then(response => response.json())
            .then(data => {
                loadAlumnos(); // Recargar la lista de alumnos
                alumnoForm.reset(); // Limpiar el formulario
            })
            .catch(error => console.error('Error:', error));
    });

    // Cargar alumnos desde el backend
    function loadAlumnos() {
        fetch('/alumnos')
            .then(response => response.json())
            .then(data => {
                alumnos = data;
                renderTable(alumnos);
                renderChart(alumnos);
            });
    }

    // Renderizar la tabla
    function renderTable(data) {
        alumnosTable.innerHTML = '';
        data.forEach(alumno => {
            const row = alumnosTable.insertRow();
            row.insertCell(0).textContent = alumno.nombre;
            row.insertCell(1).textContent = alumno.nota;
        });
    }

    // Renderizar el gráfico
    function renderChart(data) {
        const notas = data.map(a => a.nota);
        const nombres = data.map(a => a.nombre);

        if (chart) {
            chart.destroy(); // Destruir el gráfico anterior si existe
        }

        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nombres,
                datasets: [{
                    label: 'Notas',
                    data: notas,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Buscar alumnos por nombre
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredAlumnos = alumnos.filter(alumno => alumno.nombre.toLowerCase().includes(searchTerm));
        renderTable(filteredAlumnos);
    });

    // Generar reporte CSV
    generateReportButton.addEventListener('click', function() {
        const csvContent = "data:text/csv;charset=utf-8,"
            + alumnos.map(a => `${a.nombre},${a.nota}`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "alumnos_report.csv");
        document.body.appendChild(link);
        link.click();
    });
});