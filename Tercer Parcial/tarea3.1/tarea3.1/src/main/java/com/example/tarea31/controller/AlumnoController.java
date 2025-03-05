package com.example.tarea31.controller;

import com.example.tarea31.model.Alumno;
import com.example.tarea31.service.AlumnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/alumnos")
public class AlumnoController {
    @Autowired
    private AlumnoService alumnoService;

    @GetMapping
    public List<Alumno> getAllAlumnos() throws IOException {
        return alumnoService.getAllAlumnos();
    }

    @PostMapping
    public Alumno saveAlumno(@RequestBody Alumno alumno) throws IOException {
        return alumnoService.saveAlumno(alumno);
    }

    @GetMapping("/filter")
    public List<Alumno> filterByNota(@RequestParam double min, @RequestParam double max) throws IOException {
        return alumnoService.filterByNota(min, max);
    }

    @GetMapping("/sort")
    public List<Alumno> sortByNotaDesc() throws IOException {
        return alumnoService.sortByNotaDesc();
    }
}