package com.example.demo.controller;

import java.util.List;

public class NotaController {
    private final NotaService notaService;

    public NotaController(NotaService notaService) {
        this.notaService = notaService;
    }

    @GetMapping
    public List<Nota> obtenerTodas() {
        return notaService.obtenerTodas();
    }

    @PostMapping
    public Nota agregarNota(@RequestBody Nota nota) {
        return notaService.guardar(nota);
    }

    @DeleteMapping("/{id}")
    public void eliminarNota(@PathVariable Long id) {
        notaService.eliminar(id);
    }
}
