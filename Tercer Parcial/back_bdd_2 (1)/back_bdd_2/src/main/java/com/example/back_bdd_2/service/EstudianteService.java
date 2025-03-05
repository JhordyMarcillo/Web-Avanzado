package com.example.back_bdd_2.service;


import com.example.back_bdd_2.model.Estudiante;
import com.example.back_bdd_2.repository.EstudianteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstudianteService {

    private final EstudianteRepository estudianteRepository;

    public EstudianteService(EstudianteRepository estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }

    public Optional<Estudiante> obtenerPorId(Long id) {
        return estudianteRepository.findById(id);
    }

    public List<Estudiante> obtenerTodos() {
        return estudianteRepository.findAll();
    }

    public Estudiante guardar(Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }

    public Optional<Estudiante> actualizar(Long id, Estudiante detalles) {
        return estudianteRepository.findById(id).map(estudiante -> {
            estudiante.setNombre(detalles.getNombre());
            estudiante.setEmail(detalles.getEmail());
            estudiante.setFechaNacimiento(detalles.getFechaNacimiento());
            return estudianteRepository.save(estudiante);
        });
    }

    public void eliminar(Long id) {
        estudianteRepository.deleteById(id);
    }
}
