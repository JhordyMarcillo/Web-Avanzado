package com.example.tarea31.service;


import com.example.tarea31.model.Alumno;
import com.example.tarea31.repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlumnoService {

    @Autowired
    private AlumnoRepository alumnoRepository;

    public List<Alumno> getAllAlumnos() throws IOException {
        return alumnoRepository.findAll();
    }

    public Alumno saveAlumno(Alumno alumno) throws IOException {
        List<Alumno> alumnos = alumnoRepository.findAll();
        alumnos.add(alumno);
        alumnoRepository.saveAll(alumnos); // Guardar la lista actualizada
        return alumno;
    }

    public List<Alumno> filterByNota(double min, double max) throws IOException {
        return alumnoRepository.findAll().stream()
                .filter(a -> a.getNota() >= min && a.getNota() <= max)
                .collect(Collectors.toList());
    }

    public List<Alumno> sortByNotaDesc() throws IOException {
        return alumnoRepository.findAll().stream()
                .sorted(Comparator.comparingDouble(Alumno::getNota).reversed())
                .collect(Collectors.toList());
    }
}
