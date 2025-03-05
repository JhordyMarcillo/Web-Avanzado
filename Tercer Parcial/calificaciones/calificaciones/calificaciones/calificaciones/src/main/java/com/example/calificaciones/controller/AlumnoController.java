package com.example.calificaciones.controller;

import com.example.calificaciones.model.Alumno;
import com.example.calificaciones.service.AlumnoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alumnos")
public class AlumnoController {
    //llamar a la clase
    private final AlumnoService alumnoService;
    //metodo constructor
    private AlumnoController (AlumnoService alumnoService) {
        this.alumnoService = alumnoService;
    };

    //metodo para obtener alumnos
    @GetMapping
    public List<Alumno> getAlumnos () {
        return alumnoService.obtenerTodos();
    }

    //obtener alumno por ID

    @GetMapping("/{id}")
    public Alumno ObtenerPorId (@PathVariable int id) {
        return alumnoService.ObtenerPorId(id);

    }
    //agregar nuevo alumno
    @PostMapping
    public void AgregarAlumno (@RequestBody Alumno alumno) {
        alumnoService.agregarAlumno(alumno);
    }

    //actualizar la nota del alumno

    @PutMapping
    public void ActualizarNota (@PathVariable int id, @RequestParam double nota) {
        alumnoService.actualizarNota(id, nota);
    }

    @DeleteMapping("/{id}")
    public void eliminarAlumno (@PathVariable int id) {
        alumnoService.eliminarAlumno(id);
    }

}
