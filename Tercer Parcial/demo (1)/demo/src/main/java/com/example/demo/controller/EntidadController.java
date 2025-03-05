package com.example.demo.controller;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class EntidadController {
    private final EstudianteService estudianteService;

    public EntidadController(EstudianteService estudianteService) {
        this.estudianteService = estudianteService;
    }

    @GetMapping
    public List<Estudiante> obtenerTodos() {
        return estudianteService.obtenerTodos();
    }
    //
    @PutMapping("/{id}")
    public ResponseEntity<Estudiante> actualizarEstudiante(@PathVariable Long id, @RequestBody Estudiante estudianteDetalles) {
        return estudianteService.actualizar(id, estudianteDetalles)
                .map(ResponseEntity::ok)  // Devuelve 200 OK si se actualiza correctamente
                .orElseGet(() -> ResponseEntity.notFound().build());  // Devuelve 404 si no existe
    }
    //
    @PostMapping
    public Estudiante agregarEstudiante(@RequestBody Estudiante estudiante) {
        return estudianteService.guardar(estudiante);
    }

    @DeleteMapping("/{id}")
    public void eliminarEstudiante(@PathVariable Long id) {
        estudianteService.eliminar(id);
    }

}
